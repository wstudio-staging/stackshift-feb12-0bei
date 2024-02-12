import { rootSchema } from "@webriq-pagebuilder/sanity-plugin-schema-default";
import { appPromoVariants as baseVariantsList } from "@webriq-pagebuilder/sanity-plugin-schema-default";
import { MdNewReleases } from "react-icons/md";

// Images
import variantDImage from "./images/variant_d.jpg";
import initialValue from "./initialValue";
import { appPromoSchema } from "./schema";

export const variantsList = [
  ...baseVariantsList,
  {
    title: "Variant D",
    value: "variant_d",
    image: variantDImage.src,
  },
];

export default rootSchema(
  "appPromo",
  "App Promo",
  MdNewReleases,
  variantsList,
  appPromoSchema,
  initialValue
);
