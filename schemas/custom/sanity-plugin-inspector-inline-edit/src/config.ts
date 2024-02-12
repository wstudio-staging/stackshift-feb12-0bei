// Preview secret key both shared by site and studio. Randomly generated in automation / production deployment
export const SANITY_STUDIO_PREVIEW_SECRET =
  process.env.NEXT_PUBLIC_PREVIEW_SECRET || "secret";

// Defaults to `localhost:3000` but can be override as per your local settings for flexibility
export const SANITY_STUDIO_DEV_SITE_URL =
  process.env.SANITY_STUDIO_DEV_SITE_URL;

// Site LIVE domain URL
export const SANITY_STUDIO_PRODUCTION_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL;

// List of document types where Inline Edit Button will be shown
export const availableLivePreviewTypes = [
  "page",
  "post",
  "mainProduct",
  "mainCollection",
  "cartPage",
  "wishlistPage",
  "searchPage",
];
