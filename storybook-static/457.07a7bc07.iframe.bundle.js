"use strict";
(self.webpackChunk_webriq_pagebuilder_site_template_default =
  self.webpackChunk_webriq_pagebuilder_site_template_default || []).push([
  [457],
  {
    "./components/sections/stats/variant_a.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        components_ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./components/ui/Card/index.ts"
        ),
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      function VariantA(_ref) {
        var stats = _ref.stats;
        return __jsx(
          "section",
          { className: "py-20 bg-gray-50" },
          __jsx(
            "div",
            { className: "container px-4 mx-auto" },
            __jsx(
              "div",
              {
                className:
                  "flex flex-wrap items-center -mx-4 text-center justify-left",
              },
              stats &&
                stats.map(function (items, index) {
                  return __jsx(
                    "div",
                    {
                      className: "w-full px-4 my-8 sm:w-1/4 md:w-1/2 lg:w-1/4",
                      key: index,
                    },
                    __jsx(
                      components_ui_Card__WEBPACK_IMPORTED_MODULE_1__.Z,
                      { className: "relative py-10 " },
                      __jsx(
                        "p",
                        { className: "mb-1 text-brand-primary" },
                        null == items ? void 0 : items.label
                      ),
                      __jsx(
                        "span",
                        { className: "text-3xl font-bold lg:text-4xl" },
                        null == items ? void 0 : items.value
                      )
                    )
                  );
                })
            )
          )
        );
      }
      VariantA.displayName = "VariantA";
      const __WEBPACK_DEFAULT_EXPORT__ =
        react__WEBPACK_IMPORTED_MODULE_0__.memo(VariantA);
      try {
        (VariantA.displayName = "VariantA"),
          (VariantA.__docgenInfo = {
            description: "",
            displayName: "VariantA",
            props: {
              stats: {
                defaultValue: null,
                description: "",
                name: "stats",
                required: !1,
                type: { name: "StatItems[]" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "components/sections/stats/variant_a.tsx#VariantA"
            ] = {
              docgenInfo: VariantA.__docgenInfo,
              name: "VariantA",
              path: "components/sections/stats/variant_a.tsx#VariantA",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./components/ui/Card/Card.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => Card });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        utils_cn__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./utils/cn.ts"),
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      function Card(_ref) {
        var children = _ref.children,
          className = _ref.className;
        return __jsx(
          "div",
          {
            className: (0, utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(
              "rounded-lg border border-solid border-slate-300/30 p-4 shadow-sm ",
              className
            ),
          },
          children
        );
      }
      Card.displayName = "Card";
      try {
        (Card.displayName = "Card"),
          (Card.__docgenInfo = {
            description: "",
            displayName: "Card",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["components/ui/Card/Card.tsx#Card"] = {
              docgenInfo: Card.__docgenInfo,
              name: "Card",
              path: "components/ui/Card/Card.tsx#Card",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./components/ui/Card/index.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Z: () => _Card__WEBPACK_IMPORTED_MODULE_0__.Z,
      });
      var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./components/ui/Card/Card.tsx"
      );
    },
    "./utils/cn.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { cn: () => cn });
      var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/clsx/dist/clsx.mjs"
        ),
        tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/tailwind-merge/dist/bundle-mjs.mjs"
        );
      function cn() {
        for (
          var _len = arguments.length, inputs = new Array(_len), _key = 0;
          _key < _len;
          _key++
        )
          inputs[_key] = arguments[_key];
        return (0, tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m6)(
          (0, clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs)
        );
      }
    },
  },
]);
