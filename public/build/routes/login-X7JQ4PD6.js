import {
  Link,
  require_jsx_dev_runtime,
  useActionData,
  useSearchParams
} from "/build/_shared/chunk-54PFTIUO.js";
import "/build/_shared/chunk-SEUKET6G.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// app/styles/login.css
var login_default = "/build/_assets/login-TMP76G53.css";

// app/routes/login.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: login_default }
];
function Login() {
  const actionData = useActionData();
  const [searchParams] = useSearchParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "content", "data-light": "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Login" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "input",
          {
            type: "hidden",
            name: "redirectTo",
            value: searchParams.get("redirectTo") ?? void 0
          },
          void 0,
          false,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 20,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", { className: "sr-only", children: "Login or Register?" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 26,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "radio",
                name: "loginType",
                value: "login",
                defaultChecked: !actionData?.fields?.loginType || actionData?.fields?.loginType === "login"
              },
              void 0,
              false,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 28,
                columnNumber: 15
              },
              this
            ),
            " ",
            "Login"
          ] }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "radio",
                name: "loginType",
                value: "register",
                defaultChecked: actionData?.fields?.loginType === "register"
              },
              void 0,
              false,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 40,
                columnNumber: 15
              },
              this
            ),
            " ",
            "Register"
          ] }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 39,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "username-input", children: "Username" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "text",
              id: "username-input",
              name: "username",
              defaultValue: actionData?.fields?.username,
              "aria-invalid": Boolean(actionData?.fieldErrors?.username),
              "aria-errormessage": actionData?.fieldErrors?.username ? "username-error" : void 0
            },
            void 0,
            false,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 51,
              columnNumber: 13
            },
            this
          ),
          actionData?.fieldErrors?.username ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "p",
            {
              className: "form-validation-error",
              role: "alert",
              id: "username-error",
              children: actionData.fieldErrors.username
            },
            void 0,
            false,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 62,
              columnNumber: 13
            },
            this
          ) : null
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password-input", children: "Password" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              id: "password-input",
              name: "password",
              type: "password",
              defaultValue: actionData?.fields?.password,
              "aria-invalid": Boolean(actionData?.fieldErrors?.password),
              "aria-errormessage": actionData?.fieldErrors?.password ? "password-error" : void 0
            },
            void 0,
            false,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 72,
              columnNumber: 13
            },
            this
          ),
          actionData?.fieldErrors?.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "p",
            {
              className: "form-validation-error",
              role: "alert",
              id: "password-error",
              children: actionData.fieldErrors.password
            },
            void 0,
            false,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 83,
              columnNumber: 13
            },
            this
          ) : null
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "form-error-message", children: actionData?.formError ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "form-validation-error", role: "alert", children: actionData.formError }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this) : null }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "button", children: "Submit" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "links", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Home" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/jokes", children: "Jokes" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 109,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
export {
  Login as default,
  links
};
//# sourceMappingURL=/build/routes/login-X7JQ4PD6.js.map
