"use strict";
(self.webpackChunk_webriq_pagebuilder_site_template_default =
  self.webpackChunk_webriq_pagebuilder_site_template_default || []).push([
  [8649],
  {
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        function _extends() {
          return (
            (_extends = Object.assign
              ? Object.assign.bind()
              : function (target) {
                  for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source)
                      Object.prototype.hasOwnProperty.call(source, key) &&
                        (target[key] = source[key]);
                  }
                  return target;
                }),
            _extends.apply(this, arguments)
          );
        }
        __webpack_require__.d(__webpack_exports__, { Z: () => _extends });
      },
    "./components/sections/blog/variant_a.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => variant_a,
        });
      var react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        next_link = __webpack_require__("./node_modules/next/link.js"),
        link_default = __webpack_require__.n(next_link),
        next_image = __webpack_require__(
          "./node_modules/@storybook/nextjs/dist/images/next-image.mjs"
        ),
        sanity = __webpack_require__("./lib/sanity.ts"),
        format = __webpack_require__(
          "./node_modules/date-fns/esm/format/index.js"
        ),
        Text = __webpack_require__("./components/ui/Text/index.ts"),
        Badge = __webpack_require__("./components/ui/Badge/Badge.tsx"),
        ConditionalLink = __webpack_require__(
          "./components/ui/ConditionalLink/index.ts"
        ),
        __jsx = react.createElement;
      function VariantA(_ref) {
        var _posts$slice,
          _posts$slice2,
          _posts$slice3,
          _posts$slice4,
          subtitle = _ref.subtitle,
          title = _ref.title,
          posts = _ref.posts,
          primaryButton = _ref.primaryButton;
        return __jsx(
          "section",
          null,
          __jsx(
            "div",
            { className: "py-20 radius-for-skewed bg-gray-50" },
            __jsx(
              "div",
              { className: "container px-4 mx-auto" },
              __jsx(
                "div",
                { className: "mb-16 text-center" },
                subtitle &&
                  __jsx(
                    Text.x,
                    { className: "font-bold text-brand-primary" },
                    subtitle
                  ),
                title && __jsx(Text.x, { type: "h1" }, title)
              ),
              posts &&
                __jsx(
                  "div",
                  { className: "flex flex-wrap justify-center -mx-3" },
                  __jsx(
                    "div",
                    { className: "flex flex-wrap w-full lg:w-1/2" },
                    null == posts ||
                      null === (_posts$slice = posts.slice(0, 1)) ||
                      void 0 === _posts$slice
                      ? void 0
                      : _posts$slice.map(function (post, key) {
                          var _post$categories, _ref2, _post$slug, _post$title;
                          return __jsx(
                            "div",
                            { className: "w-full px-3 mb-5", key },
                            __jsx(
                              "div",
                              { className: "relative h-64 mx-auto rounded" },
                              (null == post ? void 0 : post.mainImage) &&
                                __jsx(next_image.Z, {
                                  className:
                                    "relative object-cover w-full h-full overflow-hidden rounded",
                                  src: (0, sanity.uH)(
                                    null == post ? void 0 : post.mainImage
                                  ),
                                  alt: "blog-variantA-image-".concat(key),
                                  sizes:
                                    "(min-width: 1540px) 740px, (min-width: 1280px) 612px, (min-width: 1040px) 484px, (min-width: 780px) 736px, (min-width: 680px) 608px, calc(94.44vw - 15px)",
                                  fill: !0,
                                }),
                              __jsx("div", {
                                className:
                                  "absolute inset-0 bg-gray-900 rounded opacity-75",
                              }),
                              __jsx(
                                "div",
                                {
                                  className:
                                    "absolute inset-0 flex flex-col items-start p-6",
                                },
                                (null == post ? void 0 : post.categories) &&
                                  __jsx(
                                    "div",
                                    { className: "absolute flex left-5 top-5" },
                                    null == post ||
                                      null ===
                                        (_post$categories = post.categories) ||
                                      void 0 === _post$categories
                                      ? void 0
                                      : _post$categories.map(
                                          function (category, index) {
                                            return __jsx(
                                              Badge.C,
                                              { key: index },
                                              null == category
                                                ? void 0
                                                : category.title
                                            );
                                          }
                                        )
                                  ),
                                (null == post ? void 0 : post.publishedAt) &&
                                  __jsx(
                                    "span",
                                    {
                                      className:
                                        "mt-auto text-sm text-gray-500",
                                    },
                                    (0, format.Z)(
                                      new Date(
                                        null == post ? void 0 : post.publishedAt
                                      ),
                                      "dd MMM, yyyy"
                                    )
                                  ),
                                (null == post ? void 0 : post.title) &&
                                  __jsx(
                                    link_default(),
                                    {
                                      "aria-label":
                                        null == post ? void 0 : post.title,
                                      className:
                                        "text-xl font-bold text-white transform hover:scale-110 hover:text-brand-secondary motion-reduce:transform-none lg:text-2xl",
                                      href:
                                        null !==
                                          (_ref2 = "/".concat(
                                            null == post ||
                                              null ===
                                                (_post$slug = post.slug) ||
                                              void 0 === _post$slug
                                              ? void 0
                                              : _post$slug.current
                                          )) && void 0 !== _ref2
                                          ? _ref2
                                          : "/page-not-found",
                                    },
                                    (null == post ||
                                    null === (_post$title = post.title) ||
                                    void 0 === _post$title
                                      ? void 0
                                      : _post$title.length) > 50
                                      ? (null == post
                                          ? void 0
                                          : post.title.substring(0, 50)) + "..."
                                      : null == post
                                      ? void 0
                                      : post.title
                                  )
                              )
                            )
                          );
                        }),
                    null == posts ||
                      null === (_posts$slice2 = posts.slice(1, 3)) ||
                      void 0 === _posts$slice2
                      ? void 0
                      : _posts$slice2.map(function (post, key) {
                          var _post$mainImage,
                            _post$categories2,
                            _ref3,
                            _post$slug2,
                            _post$title2;
                          return __jsx(
                            "div",
                            { className: "w-full px-3 mb-5 lg:w-1/2", key },
                            __jsx(
                              "div",
                              { className: "relative h-64 mx-auto rounded" },
                              (null == post ||
                              null === (_post$mainImage = post.mainImage) ||
                              void 0 === _post$mainImage ||
                              null ===
                                (_post$mainImage = _post$mainImage.asset) ||
                              void 0 === _post$mainImage
                                ? void 0
                                : _post$mainImage._ref) &&
                                __jsx(next_image.Z, {
                                  className:
                                    "relative object-cover w-full h-full overflow-hidden rounded",
                                  src: (0, sanity.uH)(
                                    null == post ? void 0 : post.mainImage
                                  ),
                                  alt: "blog-variantA-image-".concat(key),
                                  style: { objectFit: "fill" },
                                  sizes:
                                    "(min-width: 1540px) 358px, (min-width: 1280px) 294px, (min-width: 1040px) 230px, (min-width: 780px) 736px, (min-width: 680px) 608px, calc(94.44vw - 15px)",
                                  fill: !0,
                                }),
                              __jsx("div", {
                                className:
                                  "absolute inset-0 bg-gray-900 rounded opacity-75",
                              }),
                              __jsx(
                                "div",
                                {
                                  className:
                                    "absolute inset-0 flex flex-col items-start p-6",
                                },
                                (null == post ? void 0 : post.categories) &&
                                  __jsx(
                                    "div",
                                    { className: "absolute flex left-5 top-5" },
                                    null == post ||
                                      null ===
                                        (_post$categories2 = post.categories) ||
                                      void 0 === _post$categories2
                                      ? void 0
                                      : _post$categories2.map(
                                          function (category, index) {
                                            return __jsx(
                                              "span",
                                              {
                                                className:
                                                  "px-3 py-1 mb-auto mr-3 text-sm font-bold uppercase bg-white rounded-full text-brand-primary",
                                                key: index,
                                              },
                                              null == category
                                                ? void 0
                                                : category.title
                                            );
                                          }
                                        )
                                  ),
                                (null == post ? void 0 : post.publishedAt) &&
                                  __jsx(
                                    "span",
                                    {
                                      className:
                                        "mt-auto text-sm text-gray-500",
                                    },
                                    (0, format.Z)(
                                      new Date(
                                        null == post ? void 0 : post.publishedAt
                                      ),
                                      "dd MMM, yyyy"
                                    )
                                  ),
                                (null == post ? void 0 : post.title) &&
                                  __jsx(
                                    link_default(),
                                    {
                                      className:
                                        "text-xl font-bold text-white transform hover:scale-110 hover:text-brand-secondary motion-reduce:transform-none lg:text-2xl",
                                      href:
                                        null !==
                                          (_ref3 = "/".concat(
                                            null == post ||
                                              null ===
                                                (_post$slug2 = post.slug) ||
                                              void 0 === _post$slug2
                                              ? void 0
                                              : _post$slug2.current
                                          )) && void 0 !== _ref3
                                          ? _ref3
                                          : "/page-not-found",
                                    },
                                    (null == post ||
                                    null === (_post$title2 = post.title) ||
                                    void 0 === _post$title2
                                      ? void 0
                                      : _post$title2.length) > 50
                                      ? (null == post
                                          ? void 0
                                          : post.title.substring(0, 50)) + "..."
                                      : null == post
                                      ? void 0
                                      : post.title
                                  )
                              )
                            )
                          );
                        })
                  ),
                  __jsx(
                    "div",
                    { className: "flex flex-wrap w-full lg:w-1/2" },
                    null == posts ||
                      null === (_posts$slice3 = posts.slice(3, 5)) ||
                      void 0 === _posts$slice3
                      ? void 0
                      : _posts$slice3.map(function (post, key) {
                          var _post$categories3,
                            _ref4,
                            _post$slug3,
                            _post$title3;
                          return __jsx(
                            "div",
                            { className: "w-full px-3 mb-5 lg:w-1/2", key },
                            __jsx(
                              "div",
                              { className: "relative h-64 mx-auto rounded" },
                              (null == post ? void 0 : post.mainImage) &&
                                __jsx(next_image.Z, {
                                  className:
                                    "relative object-cover w-full h-full overflow-hidden rounded",
                                  src: (0, sanity.uH)(
                                    null == post ? void 0 : post.mainImage
                                  ),
                                  alt: "blog-variantA-image-".concat(key),
                                  sizes:
                                    "(min-width: 1540px) 358px, (min-width: 1280px) 294px, (min-width: 1040px) 230px, (min-width: 780px) 736px, (min-width: 680px) 608px, calc(94.44vw - 15px)",
                                  fill: !0,
                                }),
                              __jsx("div", {
                                className:
                                  "absolute inset-0 bg-gray-900 rounded opacity-75",
                              }),
                              __jsx(
                                "div",
                                {
                                  className:
                                    "absolute inset-0 flex flex-col items-start p-6",
                                },
                                (null == post ? void 0 : post.categories) &&
                                  __jsx(
                                    "div",
                                    { className: "absolute flex left-5 top-5" },
                                    null == post ||
                                      null ===
                                        (_post$categories3 = post.categories) ||
                                      void 0 === _post$categories3
                                      ? void 0
                                      : _post$categories3.map(
                                          function (category, index) {
                                            return __jsx(
                                              "span",
                                              {
                                                className:
                                                  "px-3 py-1 mb-auto mr-3 text-sm font-bold uppercase bg-white rounded-full text-brand-primary",
                                                key: index,
                                              },
                                              null == category
                                                ? void 0
                                                : category.title
                                            );
                                          }
                                        )
                                  ),
                                (null == post ? void 0 : post.publishedAt) &&
                                  __jsx(
                                    "span",
                                    {
                                      className:
                                        "mt-auto text-sm text-gray-500",
                                    },
                                    (0, format.Z)(
                                      new Date(
                                        null == post ? void 0 : post.publishedAt
                                      ),
                                      "dd MMM, yyyy"
                                    )
                                  ),
                                (null == post ? void 0 : post.title) &&
                                  __jsx(
                                    link_default(),
                                    {
                                      className:
                                        "text-xl font-bold text-white transform hover:scale-110 hover:text-brand-secondary motion-reduce:transform-none lg:text-2xl",
                                      href:
                                        null !==
                                          (_ref4 = "/".concat(
                                            null == post ||
                                              null ===
                                                (_post$slug3 = post.slug) ||
                                              void 0 === _post$slug3
                                              ? void 0
                                              : _post$slug3.current
                                          )) && void 0 !== _ref4
                                          ? _ref4
                                          : "/page-not-found",
                                    },
                                    (null == post ||
                                    null === (_post$title3 = post.title) ||
                                    void 0 === _post$title3
                                      ? void 0
                                      : _post$title3.length) > 50
                                      ? (null == post
                                          ? void 0
                                          : post.title.substring(0, 50)) + "..."
                                      : null == post
                                      ? void 0
                                      : post.title
                                  )
                              )
                            )
                          );
                        }),
                    null == posts ||
                      null === (_posts$slice4 = posts.slice(5, 6)) ||
                      void 0 === _posts$slice4
                      ? void 0
                      : _posts$slice4.map(function (post, key) {
                          var _post$categories4,
                            _ref5,
                            _post$slug4,
                            _post$title4;
                          return __jsx(
                            "div",
                            { className: "w-full px-3 mb-5", key },
                            __jsx(
                              "div",
                              { className: "relative h-64 mx-auto rounded" },
                              (null == post ? void 0 : post.mainImage) &&
                                __jsx(next_image.Z, {
                                  className:
                                    "relative object-cover w-full h-full overflow-hidden rounded",
                                  src: (0, sanity.uH)(
                                    null == post ? void 0 : post.mainImage
                                  ),
                                  alt: "blog-variantA-image-".concat(key),
                                  sizes:
                                    "(min-width: 1540px) 740px, (min-width: 1280px) 612px, (min-width: 1040px) 484px, (min-width: 780px) 736px, (min-width: 680px) 608px, calc(94.44vw - 15px)",
                                  fill: !0,
                                }),
                              __jsx("div", {
                                className:
                                  "absolute inset-0 bg-gray-900 rounded opacity-75",
                              }),
                              __jsx(
                                "div",
                                {
                                  className:
                                    "absolute inset-0 flex flex-col items-start p-6",
                                },
                                (null == post ? void 0 : post.categories) &&
                                  __jsx(
                                    "div",
                                    { className: "absolute flex left-5 top-5" },
                                    null == post ||
                                      null ===
                                        (_post$categories4 = post.categories) ||
                                      void 0 === _post$categories4
                                      ? void 0
                                      : _post$categories4.map(
                                          function (category, index) {
                                            return __jsx(
                                              "span",
                                              {
                                                className:
                                                  "px-3 py-1 mb-auto mr-3 text-sm font-bold uppercase bg-white rounded-full text-brand-primary",
                                                key: index,
                                              },
                                              null == category
                                                ? void 0
                                                : category.title
                                            );
                                          }
                                        )
                                  ),
                                (null == post ? void 0 : post.publishedAt) &&
                                  __jsx(
                                    "span",
                                    {
                                      className:
                                        "mt-auto text-sm text-gray-500",
                                    },
                                    (0, format.Z)(
                                      new Date(
                                        null == post ? void 0 : post.publishedAt
                                      ),
                                      "dd MMM, yyyy"
                                    )
                                  ),
                                (null == post ? void 0 : post.title) &&
                                  __jsx(
                                    link_default(),
                                    {
                                      className:
                                        "text-xl font-bold text-white transform hover:scale-110 hover:text-brand-secondary motion-reduce:transform-none lg:text-2xl",
                                      href:
                                        null !==
                                          (_ref5 = "/".concat(
                                            null == post ||
                                              null ===
                                                (_post$slug4 = post.slug) ||
                                              void 0 === _post$slug4
                                              ? void 0
                                              : _post$slug4.current
                                          )) && void 0 !== _ref5
                                          ? _ref5
                                          : "/page-not-found",
                                    },
                                    (null == post ||
                                    null === (_post$title4 = post.title) ||
                                    void 0 === _post$title4
                                      ? void 0
                                      : _post$title4.length) > 50
                                      ? (null == post
                                          ? void 0
                                          : post.title.substring(0, 50)) + "..."
                                      : null == post
                                      ? void 0
                                      : post.title
                                  )
                              )
                            )
                          );
                        })
                  ),
                  __jsx(
                    "div",
                    { className: "mt-10" },
                    (null == primaryButton ? void 0 : primaryButton.label) &&
                      __jsx(
                        ConditionalLink.M,
                        {
                          link: primaryButton,
                          className:
                            "inline-block px-6 py-2 font-bold leading-loose transition duration-200 outline-none rounded-l-xl rounded-t-xl bg-brand-primary hover:bg-brand-primary-foreground text-gray-50",
                          ariaLabel:
                            null == primaryButton
                              ? void 0
                              : primaryButton.label,
                        },
                        null == primaryButton ? void 0 : primaryButton.label
                      )
                  )
                )
            )
          )
        );
      }
      VariantA.displayName = "VariantA";
      const variant_a = react.memo(VariantA);
      try {
        (VariantA.displayName = "VariantA"),
          (VariantA.__docgenInfo = {
            description: "",
            displayName: "VariantA",
            props: {
              subtitle: {
                defaultValue: null,
                description: "",
                name: "subtitle",
                required: !1,
                type: { name: "string" },
              },
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !1,
                type: { name: "string" },
              },
              posts: {
                defaultValue: null,
                description: "",
                name: "posts",
                required: !1,
                type: { name: "BlogPost[]" },
              },
              primaryButton: {
                defaultValue: null,
                description: "",
                name: "primaryButton",
                required: !1,
                type: { name: "LabeledRoute" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "components/sections/blog/variant_a.tsx#VariantA"
            ] = {
              docgenInfo: VariantA.__docgenInfo,
              name: "VariantA",
              path: "components/sections/blog/variant_a.tsx#VariantA",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./components/ui/Badge/Badge.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { C: () => Badge });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        utils_cn__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./utils/cn.ts"),
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      function Badge(_ref) {
        var children = _ref.children,
          className = _ref.className;
        return __jsx(
          "div",
          { className: "flex" },
          __jsx(
            "div",
            {
              className: (0, utils_cn__WEBPACK_IMPORTED_MODULE_1__.cn)(
                "px-3 py-1 mr-3 text-sm font-bold uppercase bg-white rounded-full text-brand-primary",
                className
              ),
            },
            children
          )
        );
      }
      Badge.displayName = "Badge";
      try {
        (Badge.displayName = "Badge"),
          (Badge.__docgenInfo = {
            description: "",
            displayName: "Badge",
            props: {
              children: {
                defaultValue: null,
                description: "Defines the content inside the button.",
                name: "children",
                required: !0,
                type: { name: "ReactNode" },
              },
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
            (STORYBOOK_REACT_CLASSES["components/ui/Badge/Badge.tsx#Badge"] = {
              docgenInfo: Badge.__docgenInfo,
              name: "Badge",
              path: "components/ui/Badge/Badge.tsx#Badge",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./components/ui/ConditionalLink/ConditionalLink.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { M: () => ConditionalLink });
      var _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"
          ),
        _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
          ),
        next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/link.js"
        ),
        next_link__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_1__
        ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        utils_cn__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./utils/cn.ts"),
        _excluded = [
          "variant",
          "className",
          "ariaLabel",
          "children",
          "link",
          "target",
        ],
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
        ConditionalLink = function ConditionalLink(_ref) {
          var _variants$variant,
            _link$internalLink,
            _ref$variant = _ref.variant,
            variant = void 0 === _ref$variant ? "primary" : _ref$variant,
            className = _ref.className,
            ariaLabel = _ref.ariaLabel,
            children = _ref.children,
            link = _ref.link,
            target = _ref.target,
            props = (0,
            _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              _ref,
              _excluded
            ),
            commonStyles =
              "inline-block py-2 px-6 rounded-l-xl rounded-t-xl font-bold leading-loose transition duration-200",
            primary = "".concat(
              commonStyles,
              " bg-brand-primary hover:bg-brand-primary-foreground text-gray-50  outline-none "
            ),
            outline = "".concat(
              commonStyles,
              " bg-white hover:bg-slate-100  font-bold outline text-brand-primary-foreground outline-brand-primary-foreground "
            ),
            variantClass =
              null !==
                (_variants$variant = {
                  primary,
                  secondary: "".concat(
                    commonStyles,
                    " bg-brand-secondary hover:bg-brand-primary font-bold  text-gray-50"
                  ),
                  outline,
                  link: "",
                }[variant]) && void 0 !== _variants$variant
                ? _variants$variant
                : primary,
            commonProps = {
              className: (0, utils_cn__WEBPACK_IMPORTED_MODULE_3__.cn)(
                variantClass,
                className
              ),
              ariaLabel,
              target,
            };
          return (null != link && link.internalLink) ||
            (null != link && link.externalLink)
            ? "linkInternal" === (null == link ? void 0 : link.type) &&
              null != link &&
              null !== (_link$internalLink = link.internalLink) &&
              void 0 !== _link$internalLink &&
              null !==
                (_link$internalLink = _link$internalLink.toLowerCase()) &&
              void 0 !== _link$internalLink &&
              _link$internalLink.includes("home")
              ? __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                  (0,
                  _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                    { href: "/" },
                    commonProps,
                    props
                  ),
                  children
                )
              : "linkInternal" === (null == link ? void 0 : link.type)
              ? __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                  (0,
                  _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                    {},
                    commonProps,
                    props,
                    {
                      href: "/".concat(
                        null == link ? void 0 : link.internalLink
                      ),
                    }
                  ),
                  children
                )
              : "linkExternal" === (null == link ? void 0 : link.type)
              ? __jsx(
                  "a",
                  (0,
                  _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                    {},
                    commonProps,
                    props,
                    {
                      href: null == link ? void 0 : link.externalLink,
                      rel:
                        "_blank" === (null == link ? void 0 : link.linkTarget)
                          ? "noopener noreferrer"
                          : null,
                    }
                  ),
                  children
                )
              : __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                  (0,
                  _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                    {},
                    commonProps,
                    props,
                    { href: "/" }
                  ),
                  children
                )
            : __jsx(
                "a",
                (0,
                _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
                  {},
                  commonProps,
                  props,
                  { href: "/page-not-found" }
                ),
                children
              );
        };
      ConditionalLink.displayName = "ConditionalLink";
      try {
        (ConditionalLink.displayName = "ConditionalLink"),
          (ConditionalLink.__docgenInfo = {
            description: "",
            displayName: "ConditionalLink",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              variant: {
                defaultValue: { value: "primary" },
                description: "",
                name: "variant",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"primary"' },
                    { value: '"outline"' },
                    { value: '"secondary"' },
                    { value: '"link"' },
                  ],
                },
              },
              ariaLabel: {
                defaultValue: null,
                description: "",
                name: "ariaLabel",
                required: !0,
                type: { name: "string" },
              },
              link: {
                defaultValue: null,
                description: "",
                name: "link",
                required: !0,
                type: { name: "any" },
              },
              target: {
                defaultValue: null,
                description: "",
                name: "target",
                required: !1,
                type: {
                  name: "enum",
                  value: [{ value: '"_self"' }, { value: '"_blank"' }],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "components/ui/ConditionalLink/ConditionalLink.tsx#ConditionalLink"
            ] = {
              docgenInfo: ConditionalLink.__docgenInfo,
              name: "ConditionalLink",
              path: "components/ui/ConditionalLink/ConditionalLink.tsx#ConditionalLink",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./components/ui/ConditionalLink/index.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        M: () => _ConditionalLink__WEBPACK_IMPORTED_MODULE_0__.M,
      });
      var _ConditionalLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./components/ui/ConditionalLink/ConditionalLink.tsx"
      );
    },
    "./components/ui/Text/Text.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { x: () => Text });
      var _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"
          ),
        _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        utils_cn__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./utils/cn.ts"),
        _excluded = ["type", "className", "children", "style", "muted"],
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      function Text(_ref) {
        var _variants$type,
          _ref$type = _ref.type,
          type = void 0 === _ref$type ? "p" : _ref$type,
          className = _ref.className,
          children = _ref.children,
          style = _ref.style,
          _ref$muted = _ref.muted,
          muted = void 0 !== _ref$muted && _ref$muted,
          props = (0,
          _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
            _ref,
            _excluded
          ),
          Element = ["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(type)
            ? type
            : "p",
          commonClass = "".concat(muted && "text-gray-500"),
          variants = {
            h1: "".concat(
              commonClass,
              " text-4xl font-bold lg:text-5xl font-heading"
            ),
            h2: "".concat(commonClass, " text-3xl font-bold lg:text-4xl"),
            h3: "".concat(commonClass, " text-2xl font-bold lg:text-3xl"),
            h4: "".concat(commonClass, " font-bold text-2xl"),
            h5: "".concat(commonClass, " font-medium text-xl"),
            h6: "".concat(commonClass, " font-medium text-lg"),
            p: "".concat(commonClass, " text-base"),
          },
          variantClass =
            null !== (_variants$type = variants[type]) &&
            void 0 !== _variants$type
              ? _variants$type
              : variants.p;
        return __jsx(
          Element,
          (0,
          _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {
              style,
              className: (0, utils_cn__WEBPACK_IMPORTED_MODULE_3__.cn)(
                variantClass,
                className
              ),
            },
            props
          ),
          children
        );
      }
      Text.displayName = "Text";
      try {
        (Text.displayName = "Text"),
          (Text.__docgenInfo = {
            description: "",
            displayName: "Text",
            props: {
              type: {
                defaultValue: { value: "p" },
                description: "",
                name: "type",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"h1"' },
                    { value: '"h2"' },
                    { value: '"h3"' },
                    { value: '"h4"' },
                    { value: '"h5"' },
                    { value: '"h6"' },
                    { value: '"p"' },
                  ],
                },
              },
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: { name: "CSSProperties" },
              },
              muted: {
                defaultValue: { value: "false" },
                description: "",
                name: "muted",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["components/ui/Text/Text.tsx#Text"] = {
              docgenInfo: Text.__docgenInfo,
              name: "Text",
              path: "components/ui/Text/Text.tsx#Text",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./components/ui/Text/index.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        x: () => _Text__WEBPACK_IMPORTED_MODULE_0__.x,
      });
      var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./components/ui/Text/Text.tsx"
      );
    },
    "./lib/config.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { v: () => config });
      var _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/defineProperty.js"
        );
      function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(t), !0).forEach(function (r) {
                (0,
                _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(
                  e,
                  r,
                  t[r]
                );
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var config = {
        dataset: "staging",
        projectId: "9itgab5x",
        useCdn: "undefined" != typeof document && !0,
        apiVersion: "2022-03-13",
      };
      config = _objectSpread(
        _objectSpread({}, config),
        {},
        {
          token:
            "skr8WZ2B2tm4HerKBsoY6D5n1bLIPcHsvSbfj6MbmSkctoqznf2e8MGsymGKeoalP8v09S0OYV5N8hjVpqstE35EoU1K5u0sE7aTWKlB4Rk42KmCm6Rijuwj6u9z4VPISFDDKe5yLoJbLE6maUkrCzLV2SiG9Vm3MY7g3Qus50nwlmoq9jms",
        }
      );
    },
    "./lib/sanity.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        YI: () => _portabletext_react__WEBPACK_IMPORTED_MODULE_3__.YI,
        uH: () => urlFor,
      });
      var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js"
        ),
        _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__),
        _portabletext_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/@portabletext/react/dist/react-portable-text.esm.js"
        ),
        next_sanity_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/@sanity/preview-kit/dist/index.js"
        ),
        _config__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__("./lib/config.ts"),
        imageBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(
          _config__WEBPACK_IMPORTED_MODULE_0__.v
        ),
        urlFor = function urlFor(source) {
          var _imageBuilder$image$f;
          return (
            (null == source ? void 0 : source.asset) &&
            (null ===
              (_imageBuilder$image$f = imageBuilder
                .image(source)
                .format("webp")) || void 0 === _imageBuilder$image$f
              ? void 0
              : _imageBuilder$image$f.url())
          );
        };
      (0, next_sanity_preview__WEBPACK_IMPORTED_MODULE_2__.R2)(
        _config__WEBPACK_IMPORTED_MODULE_0__.v
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