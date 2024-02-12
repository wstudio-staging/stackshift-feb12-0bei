"use strict";
(self.webpackChunk_webriq_pagebuilder_site_template_default =
  self.webpackChunk_webriq_pagebuilder_site_template_default || []).push([
  [3918],
  {
    "./components/sections/blog/variant_c.tsx": (
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
        next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/link.js"
        ),
        next_link__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_1__
        ),
        next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/@storybook/nextjs/dist/images/next-image.mjs"
        ),
        lib_sanity__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./lib/sanity.ts"),
        date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/date-fns/esm/format/index.js"
        ),
        helper__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./helper/index.tsx"),
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      function VariantC(_ref) {
        var _posts$slice,
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
                { className: "flex flex-wrap items-center mb-16" },
                __jsx(
                  "div",
                  { className: "w-full text-center lg:w-1/2 lg:text-left" },
                  subtitle &&
                    __jsx(
                      "span",
                      { className: "font-bold text-brand-primary" },
                      subtitle
                    ),
                  title &&
                    __jsx(
                      "h1",
                      {
                        className:
                          "text-4xl font-bold font-heading lg:text-5xl xl:text-5xl",
                      },
                      title
                    )
                ),
                (null == primaryButton ? void 0 : primaryButton.label) &&
                  __jsx(
                    helper__WEBPACK_IMPORTED_MODULE_4__.MT,
                    {
                      link: primaryButton,
                      className:
                        "inline-block px-6 py-2 font-bold leading-loose transition duration-200 outline-none rounded-l-xl rounded-t-xl bg-brand-primary hover:bg-brand-primary-foreground text-gray-50",
                      ariaLabel:
                        null == primaryButton ? void 0 : primaryButton.label,
                    },
                    null == primaryButton ? void 0 : primaryButton.label
                  )
              ),
              posts &&
                __jsx(
                  "div",
                  null,
                  null == posts ||
                    null === (_posts$slice = posts.slice(0, 3)) ||
                    void 0 === _posts$slice
                    ? void 0
                    : _posts$slice.map(function (post, key) {
                        var _post$categories,
                          _post$authors,
                          _post$slug,
                          _ref3,
                          _post$slug2,
                          _post$categories2,
                          _post$authors2,
                          _post$slug3,
                          _ref5,
                          _post$slug4;
                        return __jsx(
                          "div",
                          {
                            className:
                              "flex flex-wrap mb-8 overflow-hidden rounded-lg shadow",
                            key,
                          },
                          key % 2 == 0
                            ? __jsx(
                                react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                null,
                                (null == post ? void 0 : post.mainImage) &&
                                  __jsx(
                                    next_image__WEBPACK_IMPORTED_MODULE_2__.Z,
                                    {
                                      className:
                                        "object-cover w-full h-auto rounded-l lg:w-1/2",
                                      src: (0,
                                      lib_sanity__WEBPACK_IMPORTED_MODULE_3__.uH)(
                                        null == post ? void 0 : post.mainImage
                                      ),
                                      sizes: "100vw",
                                      width: 554,
                                      height: 416,
                                      alt: "blog-variantC-image-".concat(key),
                                    }
                                  ),
                                __jsx(
                                  "div",
                                  {
                                    className:
                                      "w-full px-6 py-6 bg-white rounded-r lg:w-1/2 lg:pt-10",
                                  },
                                  (null == post ? void 0 : post.categories) &&
                                    (null == post ||
                                    null ===
                                      (_post$categories = post.categories) ||
                                    void 0 === _post$categories
                                      ? void 0
                                      : _post$categories.map(
                                          function (category, index) {
                                            return __jsx(
                                              "span",
                                              {
                                                className:
                                                  "px-3 py-1 mb-auto mr-3 text-sm font-bold uppercase rounded-full bg-brand-secondary-foreground text-brand-primary",
                                                key: index,
                                              },
                                              null == category
                                                ? void 0
                                                : category.title
                                            );
                                          }
                                        )),
                                  (null == post ? void 0 : post.publishedAt) &&
                                    __jsx(
                                      "span",
                                      { className: "text-sm text-gray-500" },
                                      (0,
                                      date_fns__WEBPACK_IMPORTED_MODULE_5__.Z)(
                                        new Date(
                                          null == post
                                            ? void 0
                                            : post.publishedAt
                                        ),
                                        " dd MMM, yyyy"
                                      )
                                    ),
                                  (null == post ? void 0 : post.title) &&
                                    __jsx(
                                      "h1",
                                      {
                                        className:
                                          "my-4 text-xl font-bold lg:text-2xl xl:text-2xl 2xl:text-2xl",
                                      },
                                      null == post ? void 0 : post.title
                                    ),
                                  (null == post ? void 0 : post.authors) &&
                                    __jsx(
                                      "div",
                                      { className: "flex mb-10" },
                                      __jsx(
                                        "span",
                                        {
                                          className:
                                            "italic text-brand-primary",
                                        },
                                        "By "
                                      ),
                                      null == post ||
                                        null ===
                                          (_post$authors = post.authors) ||
                                        void 0 === _post$authors
                                        ? void 0
                                        : _post$authors.map(
                                            function (author, index, _ref2) {
                                              var length = _ref2.length;
                                              return __jsx(
                                                "div",
                                                { key: index },
                                                __jsx(
                                                  "span",
                                                  {
                                                    className:
                                                      "italic text-brand-primary",
                                                  },
                                                  null == author
                                                    ? void 0
                                                    : author.name
                                                ),
                                                index + 1 !== length
                                                  ? __jsx("span", null, " , ")
                                                  : null
                                              );
                                            }
                                          )
                                    ),
                                  (null == post ? void 0 : post.excerpt) &&
                                    __jsx(
                                      "p",
                                      {
                                        className:
                                          "mb-6 text-sm text-justify text-gray-500 lg:text-base lg:leading-loose xl:text-base xl:leading-loose 2xl:text-base 2xl:leading-loose",
                                      },
                                      null == post ? void 0 : post.excerpt
                                    ),
                                  (null == post ||
                                  null === (_post$slug = post.slug) ||
                                  void 0 === _post$slug
                                    ? void 0
                                    : _post$slug.current) &&
                                    __jsx(
                                      next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                                      {
                                        "aria-label": "View Blog Post",
                                        className:
                                          "font-bold text-brand-primary hover:text-brand-primary-foreground",
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
                                      "View Blog Post"
                                    )
                                )
                              )
                            : __jsx(
                                react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                                null,
                                __jsx(
                                  "div",
                                  {
                                    className:
                                      "w-full px-6 py-6 bg-white rounded-r lg:w-1/2 lg:pt-10",
                                  },
                                  (null == post ? void 0 : post.categories) &&
                                    (null == post ||
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
                                                  "px-3 py-1 mb-auto mr-3 text-sm font-bold uppercase rounded-full bg-brand-secondary-foreground text-brand-primary",
                                                key: index,
                                              },
                                              null == category
                                                ? void 0
                                                : category.title
                                            );
                                          }
                                        )),
                                  (null == post ? void 0 : post.publishedAt) &&
                                    __jsx(
                                      "span",
                                      { className: "text-sm text-gray-500" },
                                      (0,
                                      date_fns__WEBPACK_IMPORTED_MODULE_5__.Z)(
                                        new Date(
                                          null == post
                                            ? void 0
                                            : post.publishedAt
                                        ),
                                        " dd MMM, yyyy"
                                      )
                                    ),
                                  (null == post ? void 0 : post.title) &&
                                    __jsx(
                                      "h1",
                                      {
                                        className:
                                          "my-4 text-xl font-bold lg:text-2xl xl:text-2xl 2xl:text-2xl",
                                      },
                                      null == post ? void 0 : post.title
                                    ),
                                  (null == post ? void 0 : post.authors) &&
                                    __jsx(
                                      "div",
                                      { className: "flex mb-10" },
                                      __jsx(
                                        "span",
                                        {
                                          className:
                                            "italic text-brand-primary",
                                        },
                                        "By "
                                      ),
                                      null == post ||
                                        null ===
                                          (_post$authors2 = post.authors) ||
                                        void 0 === _post$authors2
                                        ? void 0
                                        : _post$authors2.map(
                                            function (author, index, _ref4) {
                                              var length = _ref4.length;
                                              return __jsx(
                                                "div",
                                                { key: index },
                                                __jsx(
                                                  "span",
                                                  {
                                                    className:
                                                      "italic text-brand-primary",
                                                  },
                                                  null == author
                                                    ? void 0
                                                    : author.name
                                                ),
                                                index + 1 !== length
                                                  ? __jsx("span", null, " , ")
                                                  : null
                                              );
                                            }
                                          )
                                    ),
                                  (null == post ? void 0 : post.excerpt) &&
                                    __jsx(
                                      "p",
                                      {
                                        className:
                                          "mb-6 text-sm text-justify text-gray-500 lg:text-base lg:leading-loose xl:text-base xl:leading-loose 2xl:text-base 2xl:leading-loose",
                                      },
                                      null == post ? void 0 : post.excerpt
                                    ),
                                  (null == post ||
                                  null === (_post$slug3 = post.slug) ||
                                  void 0 === _post$slug3
                                    ? void 0
                                    : _post$slug3.current) &&
                                    __jsx(
                                      next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                                      {
                                        "aria-label": "View Blog Post",
                                        className:
                                          "font-bold text-brand-primary hover:text-brand-primary-foreground",
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
                                      "View Blog Post"
                                    )
                                ),
                                (null == post ? void 0 : post.mainImage) &&
                                  __jsx(
                                    next_image__WEBPACK_IMPORTED_MODULE_2__.Z,
                                    {
                                      className:
                                        "object-cover w-full h-auto rounded-l order-0 lg:order-1 lg:w-1/2",
                                      src: (0,
                                      lib_sanity__WEBPACK_IMPORTED_MODULE_3__.uH)(
                                        null == post ? void 0 : post.mainImage
                                      ),
                                      sizes: "100vw",
                                      width: 554,
                                      height: 416,
                                      alt: "blog-variantC-image-".concat(key),
                                    }
                                  )
                              )
                        );
                      })
                ),
              (null == primaryButton ? void 0 : primaryButton.label) &&
                __jsx(
                  "div",
                  { className: "block text-center lg:hidden lg:w-1/2" },
                  __jsx(
                    helper__WEBPACK_IMPORTED_MODULE_4__.MT,
                    {
                      link: primaryButton,
                      className:
                        "inline-block px-6 py-2 font-bold leading-loose transition duration-200 outline-none rounded-l-xl rounded-t-xl bg-brand-primary hover:bg-brand-primary-foreground text-gray-50",
                      ariaLabel:
                        null == primaryButton ? void 0 : primaryButton.label,
                    },
                    null == primaryButton ? void 0 : primaryButton.label
                  )
                )
            )
          )
        );
      }
      VariantC.displayName = "VariantC";
      const __WEBPACK_DEFAULT_EXPORT__ =
        react__WEBPACK_IMPORTED_MODULE_0__.memo(VariantC);
      try {
        (VariantC.displayName = "VariantC"),
          (VariantC.__docgenInfo = {
            description: "",
            displayName: "VariantC",
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
              "components/sections/blog/variant_c.tsx#VariantC"
            ] = {
              docgenInfo: VariantC.__docgenInfo,
              name: "VariantC",
              path: "components/sections/blog/variant_c.tsx#VariantC",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./helper/index.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Dt: () => defaultBlockStyle,
        MT: () => ConditionalLink,
        W6: () => thankYouPageLink,
        oQ: () => logoLink,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/link.js"
        ),
        next_link__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_1__
        ),
        next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/@storybook/nextjs/dist/images/next-image.mjs"
        ),
        lib_sanity__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./lib/sanity.ts"),
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
        thankYouPageLink = function thankYouPageLink(link) {
          return link
            ? "linkInternal" === (null == link ? void 0 : link.linkType)
              ? "/".concat(null == link ? void 0 : link.internalLink)
              : null == link
              ? void 0
              : link.externalLink
            : "/thank-you";
        },
        logoLink = function logoLink(logo) {
          var _logo$internalLink, _logo$externalLink;
          return null != logo &&
            logo.internalLink &&
            "linkInternal" === (null == logo ? void 0 : logo.type)
            ? null != logo &&
              null !== (_logo$internalLink = logo.internalLink) &&
              void 0 !== _logo$internalLink &&
              null !==
                (_logo$internalLink = _logo$internalLink.toLowerCase()) &&
              void 0 !== _logo$internalLink &&
              _logo$internalLink.includes("home")
              ? "/"
              : "/".concat(logo.internalLink)
            : null != logo &&
              logo.externalLink &&
              "linkExternal" === (null == logo ? void 0 : logo.type) &&
              null !==
                (_logo$externalLink =
                  null == logo ? void 0 : logo.externalLink) &&
              void 0 !== _logo$externalLink
            ? _logo$externalLink
            : "/";
        },
        ConditionalLink = function ConditionalLink(_ref) {
          var _link$internalLink,
            className = _ref.className,
            ariaLabel = _ref.ariaLabel,
            children = (_ref.style, _ref.children),
            link = _ref.link,
            target = _ref.target,
            defaultStyle =
              "inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-brand-primary hover:bg-brand-primary-foreground text-gray-50 font-bold leading-loose outline-none transition duration-200";
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
                  {
                    href: "/",
                    "aria-label": ariaLabel,
                    className: null != className ? className : defaultStyle,
                    target,
                  },
                  children
                )
              : "linkInternal" === (null == link ? void 0 : link.type)
              ? __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                  {
                    href: "/".concat(null == link ? void 0 : link.internalLink),
                    "aria-label": ariaLabel,
                    className: null != className ? className : defaultStyle,
                    target,
                  },
                  children
                )
              : "linkExternal" === (null == link ? void 0 : link.type)
              ? __jsx(
                  "a",
                  {
                    "aria-label": ariaLabel,
                    className: null != className ? className : defaultStyle,
                    href: null == link ? void 0 : link.externalLink,
                    target,
                    rel:
                      "_blank" === (null == link ? void 0 : link.linkTarget)
                        ? "noopener noreferrer"
                        : null,
                  },
                  children
                )
              : __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default(),
                  {
                    href: "/",
                    "aria-label": ariaLabel,
                    className: null != className ? className : defaultStyle,
                    target,
                  },
                  children
                )
            : __jsx(
                "a",
                {
                  className: null != className ? className : defaultStyle,
                  "aria-label": ariaLabel,
                  target,
                  href: "/page-not-found",
                },
                children
              );
        },
        defaultBlockStyle = {
          block: {
            h1: function h1(_ref2) {
              var children = _ref2.children;
              return __jsx(
                "h1",
                { className: "mb-6 text-7xl leading-loose text-gray-900" },
                children
              );
            },
            h2: function h2(_ref3) {
              var children = _ref3.children;
              return __jsx(
                "h2",
                { className: "mb-6 text-5xl leading-loose text-gray-900" },
                children
              );
            },
            h3: function h3(_ref4) {
              var children = _ref4.children;
              return __jsx(
                "h3",
                { className: "mb-6 text-3xl leading-loose text-gray-900" },
                children
              );
            },
            h4: function h4(_ref5) {
              var children = _ref5.children;
              return __jsx(
                "h4",
                { className: "mb-6 text-xl leading-loose text-gray-900" },
                children
              );
            },
            normal: function normal(_ref6) {
              var children = _ref6.children;
              return __jsx(
                "p",
                { className: "mb-6 text-justify leading-loose text-gray-900" },
                children
              );
            },
            blockquote: function blockquote(_ref7) {
              var children = _ref7.children;
              return __jsx(
                "blockquote",
                { className: "mb-6 px-14 italic leading-loose text-gray-500" },
                "- ",
                children
              );
            },
          },
          code: function code(_ref8) {
            var value = _ref8.value;
            return __jsx(
              "pre",
              { "data-language": value.language },
              __jsx("code", null, value.code)
            );
          },
          list: {
            bullet: function bullet(_ref9) {
              var children = _ref9.children;
              return __jsx(
                "ul",
                {
                  className: "mb-6 list-disc pl-10 leading-loose text-gray-900",
                },
                children
              );
            },
            number: function number(_ref10) {
              var children = _ref10.children;
              return __jsx(
                "ol",
                { className: "mb-6 list-decimal leading-loose text-gray-900" },
                children
              );
            },
          },
          listItem: {
            bullet: function bullet(_ref11) {
              var children = _ref11.children;
              return __jsx(
                "li",
                { className: "mb-6 leading-loose text-gray-900" },
                children
              );
            },
          },
          marks: {
            strong: function strong(_ref12) {
              var children = _ref12.children;
              return __jsx("strong", null, children);
            },
            em: function em(_ref13) {
              var children = _ref13.children;
              return __jsx("em", null, children);
            },
            code: function code(_ref14) {
              var children = _ref14.children;
              return __jsx("code", null, children);
            },
            link: function link(_ref15) {
              var children = _ref15.children,
                value = _ref15.value;
              return __jsx(
                "a",
                {
                  className:
                    "hover:text-brand-primary-foreground text-brand-primary",
                  href: value.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                children
              );
            },
          },
          types: {
            addImage: function addImage(_ref16) {
              var _value$alt,
                _value$image,
                value = _ref16.value;
              return __jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.Z, {
                className: "mb-5 h-full w-full",
                width: 500,
                height: 500,
                sizes:
                  "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                src: (0, lib_sanity__WEBPACK_IMPORTED_MODULE_3__.uH)(
                  null == value ? void 0 : value.image
                ),
                alt:
                  null !== (_value$alt = null == value ? void 0 : value.alt) &&
                  void 0 !== _value$alt
                    ? _value$alt
                    : null == value ||
                      null === (_value$image = value.image) ||
                      void 0 === _value$image ||
                      null === (_value$image = _value$image.asset) ||
                      void 0 === _value$image
                    ? void 0
                    : _value$image._ref,
              });
            },
          },
        };
      try {
        (thankYouPageLink.displayName = "thankYouPageLink"),
          (thankYouPageLink.__docgenInfo = {
            description: "",
            displayName: "thankYouPageLink",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["helper/index.tsx#thankYouPageLink"] = {
              docgenInfo: thankYouPageLink.__docgenInfo,
              name: "thankYouPageLink",
              path: "helper/index.tsx#thankYouPageLink",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (logoLink.displayName = "logoLink"),
          (logoLink.__docgenInfo = {
            description: "",
            displayName: "logoLink",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["helper/index.tsx#logoLink"] = {
              docgenInfo: logoLink.__docgenInfo,
              name: "logoLink",
              path: "helper/index.tsx#logoLink",
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
              ariaLabel: {
                defaultValue: null,
                description: "",
                name: "ariaLabel",
                required: !0,
                type: { name: "string" },
              },
              style: {
                defaultValue: { value: "{}" },
                description: "",
                name: "style",
                required: !1,
                type: { name: "any" },
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
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["helper/index.tsx#ConditionalLink"] = {
              docgenInfo: ConditionalLink.__docgenInfo,
              name: "ConditionalLink",
              path: "helper/index.tsx#ConditionalLink",
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
  },
]);