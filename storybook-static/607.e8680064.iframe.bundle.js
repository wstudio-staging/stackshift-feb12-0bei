"use strict";
(self.webpackChunk_webriq_pagebuilder_site_template_default =
  self.webpackChunk_webriq_pagebuilder_site_template_default || []).push([
  [607],
  {
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        function _arrayLikeToArray(arr, len) {
          (null == len || len > arr.length) && (len = arr.length);
          for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
          return arr2;
        }
        __webpack_require__.d(__webpack_exports__, {
          Z: () => _arrayLikeToArray,
        });
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Z: () => _slicedToArray });
        var unsupportedIterableToArray = __webpack_require__(
          "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"
        );
        function _slicedToArray(arr, i) {
          return (
            (function _arrayWithHoles(arr) {
              if (Array.isArray(arr)) return arr;
            })(arr) ||
            (function _iterableToArrayLimit(r, l) {
              var t =
                null == r
                  ? null
                  : ("undefined" != typeof Symbol && r[Symbol.iterator]) ||
                    r["@@iterator"];
              if (null != t) {
                var e,
                  n,
                  i,
                  u,
                  a = [],
                  f = !0,
                  o = !1;
                try {
                  if (((i = (t = t.call(r)).next), 0 === l)) {
                    if (Object(t) !== t) return;
                    f = !1;
                  } else
                    for (
                      ;
                      !(f = (e = i.call(t)).done) &&
                      (a.push(e.value), a.length !== l);
                      f = !0
                    );
                } catch (r) {
                  (o = !0), (n = r);
                } finally {
                  try {
                    if (
                      !f &&
                      null != t.return &&
                      ((u = t.return()), Object(u) !== u)
                    )
                      return;
                  } finally {
                    if (o) throw n;
                  }
                }
                return a;
              }
            })(arr, i) ||
            (0, unsupportedIterableToArray.Z)(arr, i) ||
            (function _nonIterableRest() {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => _unsupportedIterableToArray,
        });
        var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js"
          );
        function _unsupportedIterableToArray(o, minLen) {
          if (o) {
            if ("string" == typeof o)
              return (0, _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(
                o,
                minLen
              );
            var n = Object.prototype.toString.call(o).slice(8, -1);
            return (
              "Object" === n && o.constructor && (n = o.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(o)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? (0, _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(
                    o,
                    minLen
                  )
                : void 0
            );
          }
        }
      },
    "./components/sections/cookies/variant_a.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          cookiesBlockStyling: () => cookiesBlockStyling,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        lib_sanity__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./lib/sanity.ts"),
        utils_cookies__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./utils/cookies.js"),
        components_ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./components/ui/Button/index.ts"
        ),
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement,
        cookiesBlockStyling = {
          block: {
            normal: function normal(_ref) {
              var children = _ref.children;
              return __jsx(
                "p",
                { className: "my-5 text-sm text-gray-500" },
                children
              );
            },
          },
          marks: {
            link: function link(_ref2) {
              var _value$href,
                children = _ref2.children,
                value = _ref2.value;
              return __jsx(
                "a",
                {
                  "aria-label":
                    null !== (_value$href = value.href) &&
                    void 0 !== _value$href
                      ? _value$href
                      : "external link",
                  className:
                    "text-blue-400 hover:text-brand-secondary-foreground",
                  target: "_blank",
                  href: value.href,
                  rel: "noopener noreferrer",
                },
                children
              );
            },
          },
        };
      function VariantA(_ref3) {
        var title = _ref3.title,
          block = _ref3.block,
          allowCookieBtn = _ref3.allowCookieBtn,
          denyCookieBtn = _ref3.denyCookieBtn,
          cookie = (0, utils_cookies__WEBPACK_IMPORTED_MODULE_3__.e)(),
          _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(
            !!cookie
          ),
          _React$useState2 = (0,
          _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
            _React$useState,
            2
          ),
          showCookie = _React$useState2[0],
          setShowCookie = _React$useState2[1];
        return __jsx(
          "div",
          { className: "fixed bottom-0 z-50" },
          showCookie
            ? null
            : __jsx(
                "div",
                { className: "container px-4 mx-auto" },
                (title || block) &&
                  __jsx(
                    "div",
                    {
                      className:
                        "flex flex-wrap items-center p-6 mb-6 text-white bg-gray-800 rounded-lg",
                    },
                    __jsx(
                      "div",
                      { className: "w-full px-4 lg:w-2/3" },
                      __jsx(
                        "p",
                        { className: "font-bold font-heading" },
                        title
                      ),
                      block &&
                        __jsx(lib_sanity__WEBPACK_IMPORTED_MODULE_1__.YI, {
                          value: block,
                          components: cookiesBlockStyling,
                        })
                    ),
                    __jsx(
                      "div",
                      { className: "px-4 lg:w-1/3 lg:text-right" },
                      allowCookieBtn &&
                        __jsx(
                          components_ui_Button__WEBPACK_IMPORTED_MODULE_2__.z,
                          {
                            ariaLabel: allowCookieBtn,
                            type: "button",
                            className:
                              "py-2 m-2 border-2 border-brand-primary hover:border-brand-primary-foreground",
                            onClick: function onClick() {
                              (0, utils_cookies__WEBPACK_IMPORTED_MODULE_3__.d)(
                                "allow"
                              ),
                                setShowCookie(!showCookie);
                            },
                          },
                          allowCookieBtn
                        ),
                      denyCookieBtn &&
                        __jsx(
                          components_ui_Button__WEBPACK_IMPORTED_MODULE_2__.z,
                          {
                            ariaLabel: denyCookieBtn,
                            variant: "outline",
                            type: "button",
                            className:
                              "m-2 font-normal text-white bg-transparent border-2 border-gray-400 rounded-bl-none rounded-r-xl rounded-t-xl hover:bg-gray-700",
                            onClick: function onClick() {
                              (0, utils_cookies__WEBPACK_IMPORTED_MODULE_3__.d)(
                                "dismiss"
                              ),
                                setShowCookie(!showCookie);
                            },
                          },
                          denyCookieBtn
                        )
                    )
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
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !1,
                type: { name: "string" },
              },
              allowCookieBtn: {
                defaultValue: null,
                description: "",
                name: "allowCookieBtn",
                required: !1,
                type: { name: "string" },
              },
              denyCookieBtn: {
                defaultValue: null,
                description: "",
                name: "denyCookieBtn",
                required: !1,
                type: { name: "string" },
              },
              block: {
                defaultValue: null,
                description: "",
                name: "block",
                required: !1,
                type: { name: "any" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "components/sections/cookies/variant_a.tsx#VariantA"
            ] = {
              docgenInfo: VariantA.__docgenInfo,
              name: "VariantA",
              path: "components/sections/cookies/variant_a.tsx#VariantA",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./components/ui/Button/Button.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { z: () => Button });
      var _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
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
        utils_cn__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./utils/cn.ts"),
        react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/react-icons/fa/index.esm.js"
        ),
        _excluded = [
          "variant",
          "className",
          "ariaLabel",
          "children",
          "loading",
          "disabled",
          "loadingComponent",
          "onClick",
          "type",
        ],
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      function Button(_ref) {
        var _variants$variant,
          _ref$variant = _ref.variant,
          variant = void 0 === _ref$variant ? "primary" : _ref$variant,
          className = _ref.className,
          ariaLabel = _ref.ariaLabel,
          children = _ref.children,
          loading = _ref.loading,
          disabled = _ref.disabled,
          loadingComponent = _ref.loadingComponent,
          onClick = _ref.onClick,
          _ref$type = _ref.type,
          type = void 0 === _ref$type ? "button" : _ref$type,
          props = (0,
          _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
            _ref,
            _excluded
          ),
          commonStyles =
            "inline-block py-2 px-6 rounded-l-xl rounded-t-xl font-bold  transition duration-200",
          primary = "".concat(
            commonStyles,
            " bg-brand-primary hover:bg-brand-primary-foreground text-gray-50  outline-none "
          ),
          outline = "".concat(
            commonStyles,
            " bg-white hover:bg-slate-100  font-bold border text-brand-primary-foreground border-brand-primary-foreground "
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
                borderless: "".concat(
                  commonStyles,
                  " bg-transparent hover:bg-slate-100 border-0"
                ),
                tertiary: "".concat(
                  commonStyles,
                  " rounded bg-brand-primary hover:bg-brand-primary-foreground text-gray-50  outline-none"
                ),
              }[variant]) && void 0 !== _variants$variant
              ? _variants$variant
              : primary,
          Loader =
            null != loadingComponent
              ? loadingComponent
              : __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.fCD, {
                  className: "animate-spin",
                  size: 30,
                });
        return __jsx(
          "button",
          (0,
          _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              onClick,
              disabled: null != disabled ? disabled : loading,
              className: (0, utils_cn__WEBPACK_IMPORTED_MODULE_4__.cn)(
                variantClass,
                className
              ),
              "aria-label": ariaLabel,
              type,
            },
            props
          ),
          loading ? Loader : children
        );
      }
      Button.displayName = "Button";
      try {
        (Button.displayName = "Button"),
          (Button.__docgenInfo = {
            description: "",
            displayName: "Button",
            props: {
              className: {
                defaultValue: null,
                description: "Defines the classname of the button.",
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
                    { value: '"borderless"' },
                    { value: '"tertiary"' },
                  ],
                },
              },
              ariaLabel: {
                defaultValue: null,
                description:
                  'String value that labels the interactive element e.g. "Submit"',
                name: "ariaLabel",
                required: !0,
                type: { name: "string" },
              },
              children: {
                defaultValue: null,
                description: "Defines the content inside the button.",
                name: "children",
                required: !0,
                type: { name: "ReactNode" },
              },
              loading: {
                defaultValue: null,
                description: "Sets the button in a loading state.",
                name: "loading",
                required: !1,
                type: { name: "boolean" },
              },
              disabled: {
                defaultValue: null,
                description: "Sets the button in a disabled state.",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              loadingComponent: {
                defaultValue: null,
                description: "Custom loading component.",
                name: "loadingComponent",
                required: !1,
                type: { name: "ReactNode" },
              },
              onClick: {
                defaultValue: null,
                description: "Function that runs when the button is clicked.",
                name: "onClick",
                required: !1,
                type: { name: "() => void" },
              },
              type: {
                defaultValue: { value: "button" },
                description: "Set button type. Defaults to button",
                name: "type",
                required: !1,
                type: {
                  name: "enum",
                  value: [{ value: '"button"' }, { value: '"submit"' }],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["components/ui/Button/Button.tsx#Button"] =
              {
                docgenInfo: Button.__docgenInfo,
                name: "Button",
                path: "components/ui/Button/Button.tsx#Button",
              });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./components/ui/Button/index.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        z: () => _Button__WEBPACK_IMPORTED_MODULE_0__.z,
      });
      var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./components/ui/Button/Button.tsx"
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
    "./utils/cookies.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        d: () => setCookie,
        e: () => getCookie,
      });
      var name = "dxpstudio-cookieconsent";
      function setCookie(value) {
        var date = new Date();
        date.setTime(date.getTime() + 864e5),
          (document.cookie = ""
            .concat(name, "=")
            .concat(value, "; expires=")
            .concat(date.toUTCString(), "; path=/"));
      }
      function getCookie() {
        if ("undefined" != typeof window) {
          var matches = document.cookie.match(
            new RegExp(
              "(?:^|; )" +
                name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                "=([^;]*)"
            )
          );
          return matches ? decodeURIComponent(matches[1]) : void 0;
        }
      }
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
