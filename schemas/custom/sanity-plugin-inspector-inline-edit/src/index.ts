import { definePlugin } from "sanity";
import InlineEditBtn from "./components/InlineEditBtn";
import { availableLivePreviewTypes } from "./config";

interface WebriQInspectorInlineEditConfig {}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {webriQInspectorInlineEdit} from '@webriq-pagebuilder/sanity-plugin-inspector-inline-edit'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [webriQInspectorInlineEdit()],
 * })
 * ```
 */
export const webriQInspectorInlineEdit =
  definePlugin<WebriQInspectorInlineEditConfig | void>((config = {}) => {
    // eslint-disable-next-line no-console
    return {
      name: "sanity-plugin-inspector-inline-edit",
      document: {
        inspectors: (prev, ...rest) => {
          // We only want to show the Inline Edit Button for certain document types where we support Inline Editing feature
          if (!availableLivePreviewTypes.includes(rest?.[0]?.documentType)) {
            return prev;
          }

          // We strategically put InlineEditBtn after the first item to prevent layout shift
          const updatedItems = Array.isArray(prev) ? prev : [prev];
          updatedItems.splice(1, 0, InlineEditBtn);
          return updatedItems;
        },
      },
    };
  });
