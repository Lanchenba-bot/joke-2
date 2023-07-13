import {
  tailwind_default
} from "/build/_shared/chunk-SZCBWS73.js";
import {
  Link,
  Outlet,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-54PFTIUO.js";
import "/build/_shared/chunk-SEUKET6G.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-JQWM6NKN.css";

// node_modules/.pnpm/@uppy+core@3.3.0/node_modules/@uppy/core/dist/style.min.css
var style_min_default = "/build/_assets/style.min-RLI3TQBC.css";

// node_modules/.pnpm/@uppy+drag-drop@3.0.2_@uppy+core@3.3.0/node_modules/@uppy/drag-drop/dist/style.min.css
var style_min_default2 = "/build/_assets/style.min-KF7SKBUZ.css";

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/dist/style.css
var style_default = "/build/_assets/style-BJ2CC2FJ.css";

// app/routes/jokes.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: jokes_default },
  { rel: "stylesheet", href: style_min_default },
  { rel: "stylesheet", href: style_min_default2 },
  { rel: "stylesheet", href: style_default }
];
function JokesRoute() {
  const { jokes, userid, user } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "jokes-layout", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "jokes-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "home-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", title: "Remix Jokes", "aria-label": "Remix Jokes", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "logo", children: "\u{1F92A}" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 29,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "logo-medium", children: "J\u{1F92A}KES" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 30,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-info", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: `Hi ${user.username}` }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 35,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "button", children: "Logout" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 37,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", children: "Login" }, void 0, false, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "jokes-main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "jokes-list", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: ".", children: "Get a random joke" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Here are a few more jokes to check out:" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: jokes.map(
          ({ id, name }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: id, children: name }, void 0, false, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 55,
            columnNumber: 19
          }, this) }, id, false, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 54,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "All my jokes:" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: jokes.map(
          ({ id, jokesterId, name }) => userid === jokesterId && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: id, children: name }, void 0, false, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 65,
            columnNumber: 23
          }, this) }, id, false, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, this)
        ) }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "new", className: "button", children: "Add your own" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "jokes-outlet", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/jokes.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
export {
  JokesRoute as default,
  links
};
//# sourceMappingURL=/build/routes/jokes-BKRBGGGW.js.map
