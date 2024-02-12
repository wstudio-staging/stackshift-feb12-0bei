/** This component displays content for the COLLECTIONS page */

import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { sanityClient, getClient } from "lib/sanity.client";
import { usePreview } from "lib/sanity.preview";
import { collectionsQuery } from "pages/api/query";
import PageNotFound from "pages/404";
import { filterDataToSingleItem } from "components/list";
import { PreviewBanner } from "components/PreviewBanner";
import { PreviewNoContent } from "components/PreviewNoContent";
import { CollectionSections } from "components/page/store/collections";
import InlineEditorContextProvider from "context/InlineEditorContext";

import { CommonPageData, CommonSections, CollectionProduct } from "types";

interface CollectionPageBySlugProps {
  data: Data;
  preview: boolean;
  token: string;
  source: string;
}
interface Data {
  collectionData: CollectionData;
}

export interface CollectionData extends CommonPageData {
  collectionInfoVariant?: {
    variant?: string;
  };
  commonSections?: CommonSections | null;
  products?: CollectionProduct[] | null;
  slug?: string | null;
  name?: string | null;
}

interface DocumentWithPreviewProps {
  data: Data;
  slug: string | string[];
  token: string;
}

function CollectionPageBySlug({
  data,
  preview,
  token,
  source,
}: CollectionPageBySlugProps) {
  const router = useRouter();
  const slug = router.query.slug;
  const showInlineEditor = source === "studio";

  useEffect(() => {
    if (typeof Ecwid !== "undefined") Ecwid.init();
  }, []);

  if (!data?.collectionData) {
    return <PageNotFound />;
  } else {
    if (preview) {
      return (
        <>
          <PreviewBanner />
          <PreviewSuspense fallback="Loading...">
            <InlineEditorContextProvider showInlineEditor={showInlineEditor}>
              <DocumentWithPreview {...{ data, token: token || null, slug }} />
            </InlineEditorContextProvider>
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
  const publishedData = data?.collectionData; // latest published data in Sanity

  // General safeguard against empty data
  if (!publishedData) {
    return null;
  }

  const {
    commonSections, // sections from Store > Pages > Collections
    name, // collection name
    seo, // collection page SEO
  } = publishedData;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=360 initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="../favicon.ico" />
        <title>
          {seo?.seoTitle ??
            commonSections?.seo?.seoTitle ??
            name ??
            "WebriQ Studio"}
        </title>
      </Head>

      {/* Show Product page sections */}
      {data?.collectionData && <CollectionSections data={publishedData} />}
    </>
  );
}

/**
 *
 * @param data Data from getStaticProps based on current slug value
 * @param slug Slug value from getStaticProps
 * @param token Token value supplied via `/api/preview` route
 * @param source Source value supplied via `/api/preview` route
 *
 * @returns Document with preview data
 */
function DocumentWithPreview({
  data,
  slug,
  token = null,
}: DocumentWithPreviewProps) {
  // Current drafts data in Sanity
  const previewDataEventSource = usePreview(token, collectionsQuery, { slug });
  const previewData: CollectionData =
    previewDataEventSource?.[0] || previewDataEventSource; // Latest preview data in Sanity

  // General safeguard against empty data
  if (!previewData) {
    return null;
  }

  const {
    commonSections, // sections from Store > Pages > Collections
    name, // collection name
    seo, // collection page SEO
  } = previewData;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=360 initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="../favicon.ico" />
        <title>
          {seo?.seoTitle ??
            commonSections?.seo?.seoTitle ??
            name ??
            "WebriQ Studio"}
        </title>
      </Head>

      {/* if no sections, show no sections only in preview */}
      {(!previewData ||
        !previewData?.sections ||
        previewData?.sections?.length === 0) && <PreviewNoContent />}

      {/* Show Product page sections */}
      {data?.collectionData && <CollectionSections data={previewData} />}
    </>
  );
}

export async function getStaticProps({
  params,
  preview = false,
  previewData = {},
}: any): Promise<{ props: CollectionPageBySlugProps; revalidate: number }> {
  const client =
    preview && previewData?.token
      ? getClient(false).withConfig({ token: previewData.token })
      : getClient(preview);

  const collections = await client.fetch(collectionsQuery, {
    slug: params.slug,
  });

  // pass collections data and preview to helper function
  const singleCollectionsData: CollectionData = filterDataToSingleItem(
    collections,
    preview
  );

  return {
    props: {
      preview,
      token: (preview && previewData.token) || "",
      source: (preview && previewData.source) || "",
      data: {
        collectionData: singleCollectionsData || null,
      },
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  };
}

export async function getStaticPaths() {
  const collections = await sanityClient.fetch(
    groq`*[_type == "mainCollection" && defined(slug.current)][].slug.current`
  );

  return {
    paths: collections.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export default React.memo(CollectionPageBySlug);
