"use strict";
(self.webpackChunk_webriq_pagebuilder_site_template_default =
  self.webpackChunk_webriq_pagebuilder_site_template_default || []).push([
  [6270],
  {
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        function _assertThisInitialized(self) {
          if (void 0 === self)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return self;
        }
        __webpack_require__.d(__webpack_exports__, {
          Z: () => _assertThisInitialized,
        });
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor))
            throw new TypeError("Cannot call a class as a function");
        }
        __webpack_require__.d(__webpack_exports__, {
          Z: () => _classCallCheck,
        });
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/createClass.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, { Z: () => _createClass });
        var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"
          );
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            (descriptor.enumerable = descriptor.enumerable || !1),
              (descriptor.configurable = !0),
              "value" in descriptor && (descriptor.writable = !0),
              Object.defineProperty(
                target,
                (0, _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.Z)(
                  descriptor.key
                ),
                descriptor
              );
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          return (
            protoProps && _defineProperties(Constructor.prototype, protoProps),
            staticProps && _defineProperties(Constructor, staticProps),
            Object.defineProperty(Constructor, "prototype", { writable: !1 }),
            Constructor
          );
        }
      },
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
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        function _getPrototypeOf(o) {
          return (
            (_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function _getPrototypeOf(o) {
                  return o.__proto__ || Object.getPrototypeOf(o);
                }),
            _getPrototypeOf(o)
          );
        }
        __webpack_require__.d(__webpack_exports__, {
          Z: () => _getPrototypeOf,
        });
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/inherits.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        function _setPrototypeOf(o, p) {
          return (
            (_setPrototypeOf = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function _setPrototypeOf(o, p) {
                  return (o.__proto__ = p), o;
                }),
            _setPrototypeOf(o, p)
          );
        }
        function _inherits(subClass, superClass) {
          if ("function" != typeof superClass && null !== superClass)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (subClass.prototype = Object.create(
            superClass && superClass.prototype,
            { constructor: { value: subClass, writable: !0, configurable: !0 } }
          )),
            Object.defineProperty(subClass, "prototype", { writable: !1 }),
            superClass && _setPrototypeOf(subClass, superClass);
        }
        __webpack_require__.d(__webpack_exports__, { Z: () => _inherits });
      },
    "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
      (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => _possibleConstructorReturn,
        });
        var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/typeof.js"
          ),
          _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
            );
        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            ("object" ===
              (0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__.Z)(call) ||
              "function" == typeof call)
          )
            return call;
          if (void 0 !== call)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return (0, _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
            self
          );
        }
      },
    "./components/common/form/sign-up-form.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { W: () => SignUpForm });
      var _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        components_ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./components/ui/Card/index.ts"
        ),
        components_ui_ConditionalLink__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./components/ui/ConditionalLink/index.ts"),
        components_ui_Form_Form__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./components/ui/Form/Form.tsx"),
        components_ui_FormField__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__("./components/ui/FormField/index.ts"),
        helper__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__("./helper/index.tsx"),
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      function SignUpForm(_ref) {
        var _form$fields,
          _form$fields2,
          _form$buttonLabel,
          form = _ref.form,
          signInLink = _ref.signInLink,
          className = _ref.className;
        return __jsx(
          components_ui_Card__WEBPACK_IMPORTED_MODULE_1__.Z,
          { className: "px-6 py-8 mb-6 text-center ".concat(className) },
          __jsx(
            components_ui_Form_Form__WEBPACK_IMPORTED_MODULE_3__.l,
            {
              id: null == form ? void 0 : form.id,
              name: "Calltoaction-VariantD-Form",
              className: "form-callToAction",
              "thankyouPage-": (0, helper__WEBPACK_IMPORTED_MODULE_5__.W6)(
                null == form ? void 0 : form.thankYouPage
              ),
            },
            __jsx(
              "div",
              { className: "mb-6" },
              __jsx(
                "span",
                { className: "text-sm text-gray-500" },
                null == form ? void 0 : form.subtitle
              ),
              __jsx(
                "p",
                { className: "text-2xl" },
                null == form ? void 0 : form.name
              )
            ),
            __jsx(
              "div",
              { className: "flex flex-wrap mb-3 -mx-2" },
              null == form ||
                null === (_form$fields = form.fields) ||
                void 0 === _form$fields ||
                null === (_form$fields = _form$fields.slice(0, 2)) ||
                void 0 === _form$fields
                ? void 0
                : _form$fields.map(function (formFields, index) {
                    return __jsx(
                      "div",
                      {
                        className:
                          "w-full px-2 mb-3 lg:mb-0 lg:w-1/2 xl:mb-0 2xl:mb-0",
                        key: index,
                      },
                      __jsx(
                        components_ui_FormField__WEBPACK_IMPORTED_MODULE_4__.W,
                        (0,
                        _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                          {
                            noLabel: !0,
                            variant: "secondary",
                            name: null == formFields ? void 0 : formFields.name,
                            placeholder:
                              null == formFields
                                ? void 0
                                : formFields.placeholder,
                            required:
                              null == formFields
                                ? void 0
                                : formFields.isRequired,
                          },
                          formFields
                        )
                      )
                    );
                  })
            ),
            __jsx(
              "div",
              { className: "mb-3 space-y-3" },
              null == form ||
                null === (_form$fields2 = form.fields) ||
                void 0 === _form$fields2 ||
                null === (_form$fields2 = _form$fields2.slice(2)) ||
                void 0 === _form$fields2
                ? void 0
                : _form$fields2.map(function (formFields, index) {
                    return __jsx(
                      "div",
                      { key: index },
                      __jsx(
                        components_ui_FormField__WEBPACK_IMPORTED_MODULE_4__.W,
                        (0,
                        _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
                          {
                            noLabel: !0,
                            name: null == formFields ? void 0 : formFields.name,
                            variant: "secondary",
                          },
                          formFields
                        )
                      )
                    );
                  })
            ),
            __jsx("div", null, __jsx("div", { className: "webriq-recaptcha" })),
            (null == form ? void 0 : form.buttonLabel) &&
              __jsx(
                "button",
                {
                  "aria-label":
                    null !==
                      (_form$buttonLabel =
                        null == form ? void 0 : form.buttonLabel) &&
                    void 0 !== _form$buttonLabel
                      ? _form$buttonLabel
                      : "Call to action form submit button",
                  className:
                    "w-full py-4 mb-4 text-sm font-bold leading-normal text-white transition duration-200 rounded bg-brand-primary-foreground hover:bg-brand-primary",
                  type: "submit",
                },
                null == form ? void 0 : form.buttonLabel
              )
          ),
          (null == signInLink ? void 0 : signInLink.label) &&
            __jsx(
              "p",
              { className: "text-xs text-gray-500" },
              __jsx("span", null, "Already have an account?"),
              __jsx(
                components_ui_ConditionalLink__WEBPACK_IMPORTED_MODULE_2__.M,
                {
                  variant: "link",
                  link: signInLink,
                  className: "text-brand-primary hover:text-brand-secondary",
                  ariaLabel: null == signInLink ? void 0 : signInLink.label,
                },
                null == signInLink ? void 0 : signInLink.label
              )
            )
        );
      }
      SignUpForm.displayName = "SignUpForm";
      try {
        (SignUpForm.displayName = "SignUpForm"),
          (SignUpForm.__docgenInfo = {
            description: "",
            displayName: "SignUpForm",
            props: {
              form: {
                defaultValue: null,
                description: "",
                name: "form",
                required: !0,
                type: { name: "TForm" },
              },
              signInLink: {
                defaultValue: null,
                description: "",
                name: "signInLink",
                required: !1,
                type: { name: "LabeledRoute" },
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
            (STORYBOOK_REACT_CLASSES[
              "components/common/form/sign-up-form.tsx#SignUpForm"
            ] = {
              docgenInfo: SignUpForm.__docgenInfo,
              name: "SignUpForm",
              path: "components/common/form/sign-up-form.tsx#SignUpForm",
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
    "./components/ui/Form/Form.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { l: () => Form });
      var components_webriq_form__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./components/webriq-form.js"),
        helper__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./helper/index.tsx"),
        __jsx = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ).createElement,
        Form = function Form(_ref) {
          var id = _ref.id,
            name = _ref.name,
            thankyouPage = _ref.thankyouPage,
            className = _ref.className,
            children = _ref.children;
          return __jsx(
            components_webriq_form__WEBPACK_IMPORTED_MODULE_1__.Z,
            {
              method: "POST",
              "data-form-id": id,
              name: null != name ? name : "Form",
              className,
              "data-thankyou-url": (0, helper__WEBPACK_IMPORTED_MODULE_2__.W6)(
                thankyouPage
              ),
              scriptsrc:
                "https://pagebuilderforms.webriq.com/js/initReactForms",
            },
            children
          );
        };
      Form.displayName = "Form";
      try {
        (Form.displayName = "Form"),
          (Form.__docgenInfo = {
            description: "",
            displayName: "Form",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              id: {
                defaultValue: null,
                description: "",
                name: "id",
                required: !0,
                type: { name: "string" },
              },
              name: {
                defaultValue: null,
                description: "",
                name: "name",
                required: !0,
                type: { name: "string" },
              },
              thankyouPage: {
                defaultValue: null,
                description: "",
                name: "thankyouPage",
                required: !1,
                type: { name: "LabeledRoute" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["components/ui/Form/Form.tsx#Form"] = {
              docgenInfo: Form.__docgenInfo,
              name: "Form",
              path: "components/ui/Form/Form.tsx#Form",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./components/ui/FormField/index.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        W: () => _FormField__WEBPACK_IMPORTED_MODULE_0__.W,
      });
      var _FormField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./components/ui/FormField/FormField.tsx"
      );
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
    "./components/webriq-form.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Z: () => __WEBPACK_DEFAULT_EXPORT__,
      });
      var _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/extends.js"
          ),
        _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
          ),
        _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
          ),
        _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/createClass.js"
          ),
        _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"
          ),
        _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/inherits.js"
          ),
        _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"
          ),
        _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./node_modules/@storybook/nextjs/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        _excluded = ["id", "name", "className"],
        __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = (0,
            _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
              Derived
            );
          if (hasNativeReflectConstruct) {
            var NewTarget = (0,
            _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__.Z)(
              this
            ).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else result = Super.apply(this, arguments);
          return (0,
          _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            this,
            result
          );
        };
      }
      var WebriQForm = (function (_React$Component) {
        (0,
        _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
          WebriQForm,
          _React$Component
        );
        var _super = _createSuper(WebriQForm);
        function WebriQForm(props) {
          var _this;
          return (
            (0,
            _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
              this,
              WebriQForm
            ),
            ((_this = _super.call(this, props)).loadWebriQFormScript =
              _this.loadWebriQFormScript.bind(
                (0,
                _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
                  _this
                )
              )),
            _this
          );
        }
        return (
          (0,
          _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.Z)(
            WebriQForm,
            [
              {
                key: "componentDidMount",
                value: function componentDidMount() {
                  window &&
                    !window.isWebriQFormLoaded &&
                    this.loadWebriQFormScript(),
                    window &&
                      window.isWebriQFormLoaded &&
                      window.webriqFormRefresh();
                },
              },
              {
                key: "loadWebriQFormScript",
                value: function loadWebriQFormScript() {
                  if (!document.getElementById("webriqform")) {
                    var script = document.createElement("script");
                    (script.type = "text/javascript"),
                      (script.id = "webriqform"),
                      (script.defer = !0),
                      (script.src =
                        this.props.scriptSrc ||
                        "https://pagebuilderforms.webriq.com/js/initReactForms"),
                      document.body.appendChild(script);
                    var headScript = document.getElementsByTagName("script")[0];
                    headScript.parentNode.insertBefore(script, headScript);
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                  var unmountScript = this.props.unmountScript,
                    webriqFormScript = document.getElementById("webriqform");
                  webriqFormScript &&
                    unmountScript &&
                    webriqFormScript.parentNode.removeChild(webriqFormScript),
                    window && unmountScript && (window.isWebriQFormLoaded = !1);
                  var webriqFormRecaptcha = document.getElementById(
                    "webriqFormRecaptcha"
                  );
                  webriqFormRecaptcha &&
                    unmountScript &&
                    webriqFormRecaptcha.parentNode.removeChild(
                      webriqFormRecaptcha
                    );
                },
              },
              {
                key: "render",
                value: function render() {
                  var _this$props = this.props,
                    id = _this$props.id,
                    name = _this$props.name,
                    className = _this$props.className,
                    rest = (0,
                    _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_7__.Z)(
                      _this$props,
                      _excluded
                    ),
                    formId = this.props.formId || this.props["data-form-id"],
                    redirectURL =
                      this.props.redirectUrl ||
                      this.props["data-thankyou-url"] ||
                      "/thank-you";
                  return __jsx(
                    "form",
                    (0,
                    _Users_johnchristophermoreno_Desktop_workspace_webriq_site_template_default_node_modules_storybook_nextjs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_8__.Z)(
                      {
                        name,
                        id,
                        className,
                        method: "POST",
                        "data-form-id": formId,
                        "data-thankyou-url": redirectURL,
                        webriq: "true",
                      },
                      rest
                    ),
                    this.props.children
                  );
                },
              },
            ]
          ),
          WebriQForm
        );
      })(react__WEBPACK_IMPORTED_MODULE_0__.Component);
      WebriQForm.displayName = "WebriQForm";
      const __WEBPACK_DEFAULT_EXPORT__ = WebriQForm;
      WebriQForm.__docgenInfo = {
        description: "",
        methods: [
          {
            name: "loadWebriQFormScript",
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
        ],
        displayName: "WebriQForm",
      };
    },
  },
]);