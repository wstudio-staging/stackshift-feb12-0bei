import { rootSchema } from "@webriq-pagebuilder/sanity-plugin-schema-default";
import { MdBrowseGallery } from "react-icons/md";

// Images
import variantAImage from "./images/variant_a.jpg";
import initialValue from "./initialValue";
import { carouselSchema } from "./schema";

export const variantsList = [
  {
    title: "Variant A",
    description: "Carousel variant A",
    value: "variant_a",
    image: variantAImage.src,
  },
];

export default rootSchema(
  "carousel",
  "Carousel",
  MdBrowseGallery,
  variantsList,
  carouselSchema,
  initialValue
);
