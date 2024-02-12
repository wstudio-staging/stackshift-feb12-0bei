import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { sanityClient, getClient } from "lib/sanity.client";
import { blogQuery, slugQuery } from "./api/query";
import { usePreview } from "lib/sanity.preview";
import { PageSections } from "components/page";
import BlogSections from "components/blog";
import { PreviewBanner } from "components/PreviewBanner";
import { PreviewNoContent } from "components/PreviewNoContent";
import { filterDataToSingleItem } from "components/list";
import PageNotFound from "pages/404";
import { GetStaticPaths, GetStaticProps } from "next";

import { CommonPageData, BlogsData } from "types";

interface PageBySlugProps {
  data: Data;
  preview: boolean;
  token: string | null;
  source: string;
}

interface DocumentWithPreviewProps {
  data: Data;
  slug: string | string[];
  token: string | null;
  source: string;
}

interface Data {
  pageData: PageData | null;
  blogData: BlogsData | null;
}

export interface PageData extends CommonPageData {
  collections: any;
  slug: string | string[];
  title: string;
}

export function PageBySlug({ data, preview, token, source }: PageBySlugProps) {
  const router = useRouter();
  const slug = router.query.slug;
  console.log(data);
  if (!data?.pageData && !data?.blogData) {
    return <PageNotFound />;
  } else {
    if (preview) {
      return (
        <>
          <PreviewBanner />
          <PreviewSuspense fallback="Loading...">
            <DocumentWithPreview
              {...{ data, token: token || null, slug, source }}
            />
          </PreviewSuspense>
        </>
      );
    }

    return <Document {...{ data }} />;
  }
}

/**
 *
 * @param {data} Data from getStaticProps based on current slug value
 *
 * @returns Document with published data
 */
function Document({ data }: { data: Data }) {
  const publishedData = data?.pageData || data?.blogData; // latest published data in Sanity

  // General safeguard against empty data
  if (!publishedData) {
    return null;
  }

  const { title, seo } = publishedData;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=360 initial-scale=1" />
        <title>{seo?.seoTitle ?? title ?? "WebriQ Studio"}</title>
      </Head>

      {/*  Show page sections */}
      {data?.pageData && (
        <PageSections data={data?.pageData} enableInlineEditing={false} />
      )}

      {/* Show Blog sections */}
      {data?.blogData && <BlogSections data={data?.blogData} />}
    </>
  );
}

/**
 *
 * @param data Data from getStaticProps based on current slug value
 * @param slug Slug value from getStaticProps
 * @param token Token value supplied via `/api/preview` route
 *
 * @returns Document with preview data
 */
function DocumentWithPreview({
  data,
  slug,
  token = null,
  source,
}: DocumentWithPreviewProps) {
  // Current drafts data in Sanity
  const previewDataEventSource = usePreview(
    token,
    data?.pageData ? slugQuery : blogQuery, // as a fallback we assume it's a blog post
    {
      slug,
    }
  );

  const previewData: PageData | BlogsData =
    previewDataEventSource?.[0] || previewDataEventSource; // Latest preview data in Sanity
  const enableInlineEditing = source === "studio";

  // General safeguard against empty data
  if (!previewData) {
    return null;
  }

  const { title, seo, _type } = previewData;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=360 initial-scale=1" />
        <title>{seo?.seoTitle ?? title ?? "WebriQ Studio"}</title>
      </Head>

      {/* if page has no sections, show no sections only in preview */}
      {_type === "page" &&
        "sections" in previewData &&
        (!previewData ||
          !previewData?.sections ||
          previewData?.sections?.length === 0) && <PreviewNoContent />}

      {/*  Show page sections */}
      {data?.pageData && (
        <PageSections
          data={previewData as PageData}
          enableInlineEditing={enableInlineEditing}
        />
      )}

      {/* Show Blog sections */}
      {data?.blogData && <BlogSections data={previewData as BlogsData} />}
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData = {},
}: any): Promise<{ props: PageBySlugProps; revalidate?: number }> => {
  const client =
    preview && previewData?.token
      ? getClient(false).withConfig({ token: previewData.token })
      : getClient(preview);

  const [page, blogData] = await Promise.all([
    client.fetch(slugQuery, { slug: params.slug }),
    client.fetch(blogQuery, { slug: params.slug }),
  ]);

  // pass page data and preview to helper function
  const singlePageData: PageData = filterDataToSingleItem(page, preview);
  const singleBlogData: BlogsData = filterDataToSingleItem(blogData, preview);

  return {
    props: {
      preview,
      source: (preview && previewData?.source) || "",
      token: (preview && previewData.token) || "",
      data: {
        pageData: singlePageData || null,
        blogData: singleBlogData || null,
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    groq`*[_type in ["page", "post"] && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map(slug => ({ params: { slug } })),
    fallback: true,
  };
};

export default React.memo(PageBySlug);
