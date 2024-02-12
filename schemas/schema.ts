import pages from "./documents/pages";
import { mergeReplaceAndAdd } from "studio/utils";

import { baseSchema } from "@webriq-pagebuilder/sanity-plugin-schema-default";
const baseSchemaArray = Object.values(baseSchema);

import { blogSchema } from "@webriq-pagebuilder/sanity-plugin-schema-blog";
const blogSchemaArray = Object.values(blogSchema);

import { commerceSchema } from "@webriq-pagebuilder/sanity-plugin-schema-commerce";
const commerceSchemaArray = Object.values(commerceSchema);

import customSchema from "./custom";
const customSchemaArray = Object.values(customSchema);

const allSchemas = mergeReplaceAndAdd(baseSchemaArray, commerceSchemaArray);
const updatedSchemas = mergeReplaceAndAdd(allSchemas, customSchemaArray);

export const schemaTypes = [pages, ...updatedSchemas, ...blogSchemaArray];
