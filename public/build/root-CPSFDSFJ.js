import {
  tailwind_default
} from "/build/_shared/chunk-SZCBWS73.js";
import {
  Links,
  LiveReload,
  Outlet,
  Scripts,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-54PFTIUO.js";
import "/build/_shared/chunk-SEUKET6G.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-NMBC7QXE.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-LTH6YFKS.css";

// app/styles/global.css
var global_default = "/build/_assets/global-PTW6F3XD.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: global_default },
  {
    rel: "stylesheet",
    href: global_medium_default,
    media: "print, (min-width: 640px)"
  },
  {
    rel: "stylesheet",
    href: global_large_default,
    media: "screen and (min-width: 1024px)"
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: "Remix: So great, it's funny!" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-CPSFDSFJ.js.map
