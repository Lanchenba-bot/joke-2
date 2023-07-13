import {
  require_db,
  require_node
} from "/build/_shared/chunk-LQJX25IX.js";
import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-54PFTIUO.js";
import "/build/_shared/chunk-SEUKET6G.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// app/routes/jokes/index.tsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function JokesIndexRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Here's a random joke:" }, void 0, false, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: data.randomJoke.content }, void 0, false, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: data.randomJoke.id, children: [
      '"',
      data.randomJoke.name,
      '" Permalink'
    ] }, void 0, true, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/jokes/index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
export {
  JokesIndexRoute as default
};
//# sourceMappingURL=/build/routes/jokes/index-VF5V6AUK.js.map
