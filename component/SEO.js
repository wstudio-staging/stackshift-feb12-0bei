import React from "react";
import { seoImageUrl } from "lib/sanity";
import { NextSeo } from "next-seo";

function SEO({ data }) {
  const blog = data?.blogData;
  const page = data?.page || data?.page?.[0] || data?.pages;
  const blogDescription = blogPostBody(blog?.excerpt || blog?.body);

  const url = process.env.NEXT_PUBLIC_SITE_URL;
  const seo = blog?.seo ?? page?.seo;
  const title = blog?.title ?? page?.title;
  const slug = page?.slug ?? blog?.slug?.current;

  return (
    <>
      <NextSeo
        openGraph={{
          title: seo?.seoTitle || title,
          description: seo?.seoDescription || blogDescription,
          url: `${url}/${slug === "home" ? "" : slug}`,
          images: [
            {
              url: seoImageUrl(seo?.seoImage),
              width: 520,
              height: 320,
              alt: "Page thumbnail image for SEO",
              type: "image/webp",
            },
          ],
          site_name: seo?.seoTitle || title,
        }} // Twitter will read the og:title, og:image and og:description tags for their card. next-seo omits twitter:title, twitter:image and twitter:description to avoid duplication.
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: seo?.seoKeywords,
          },
          {
            name: "synonyms",
            content: seo?.seoSynonyms,
          },
        ]}
        additionalLinkTags={[
          // useful for PWA metatags
          {
            rel: "icon",
            href: "favicon.ico",
          },
        ]}
        robotsProps={{
          maxSnippet: -1, // maximum of [number] characters as textual snippet for this search result
          maxImagePreview: "large", // maximum size of image preview for page in search results
        }}
      />
    </>
  );
}

// this function returns the first 100 characters of the blog post body or excerpt when an SEO description for the blog post is not provided
function blogPostBody(body) {
  let description;

  if (typeof body === "object" && Array.isArray(body)) {
    const block = body?.find((content) => content._type === "block");
    description =
      block?.children?.[0]?.text?.split(". ").slice(0, 2).join(".") + ".";
  } else {
    description = body?.split(". ").slice(0, 2).join(".");
  }

  return description;
}

export default React.memo(SEO);
