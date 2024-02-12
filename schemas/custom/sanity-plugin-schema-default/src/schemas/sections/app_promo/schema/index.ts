import { hideIfVariantIn } from "@webriq-pagebuilder/sanity-plugin-schema-default";
import {
  arrayOfImages,
  description,
  logo,
  appPromostatItems,
  subtitle,
  tags,
  title,
} from "../../../common/fields";

export const appPromoSchema = [
  logo(hideIfVariantIn(["variant_b", "variant_c"])),
  subtitle(),
  title(),
  description(hideIfVariantIn(["variant_a"])),
  appPromostatItems(hideIfVariantIn(["variant_a", "variant_c"])),
  tags("", "", hideIfVariantIn(["variant_a", "variant_b"])),
  arrayOfImages(),
];
