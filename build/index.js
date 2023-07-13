var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  dev: () => dev,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-N4JBW4X2.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-AMGOQIW7.css";

// app/styles/global.css
var global_default = "/build/_assets/global-MJ6OFPDA.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 31,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Remix: So great, it's funny!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, { port: 8002 }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/routes/jokes.$jokeId.tsx
var jokes_jokeId_exports = {};
__export(jokes_jokeId_exports, {
  default: () => JokeRoute,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), db = global.__db__, db.$connect();

// app/routes/jokes.$jokeId.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), loader = async ({ params }) => {
  let joke = await db.joke.findUnique({
    where: { id: params.jokeId }
  });
  if (!joke)
    throw new Error("Joke not found");
  return (0, import_node2.json)({ joke });
};
function JokeRoute() {
  let data = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Here's your hilarious joke:" }, void 0, !1, {
      fileName: "app/routes/jokes.$jokeId.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: data.joke.content }, void 0, !1, {
      fileName: "app/routes/jokes.$jokeId.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: ".", children: [
      '"',
      data.joke.name,
      '" Permalink'
    ] }, void 0, !0, {
      fileName: "app/routes/jokes.$jokeId.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes.$jokeId.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/jokes._index.tsx
var jokes_index_exports = {};
__export(jokes_index_exports, {
  default: () => JokesIndexRoute,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react");
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), loader2 = async () => {
  let count = await db.joke.count(), randomRowNumber = Math.floor(Math.random() * count), [randomJoke] = await db.joke.findMany({
    skip: randomRowNumber,
    take: 1
  });
  return (0, import_node3.json)({ randomJoke });
};
function JokesIndexRoute() {
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Here's a random joke:" }, void 0, !1, {
      fileName: "app/routes/jokes._index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: data.randomJoke.content }, void 0, !1, {
      fileName: "app/routes/jokes._index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: data.randomJoke.id, children: [
      '"',
      data.randomJoke.name,
      '" Permalink'
    ] }, void 0, !0, {
      fileName: "app/routes/jokes._index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes._index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/jokes.new.tsx
var jokes_new_exports = {};
__export(jokes_new_exports, {
  action: () => action,
  default: () => NewJokeRoute
});
var import_node4 = require("@remix-run/node");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), action = async ({ request }) => {
  let form = await request.formData(), content = form.get("content"), name = form.get("name");
  if (typeof content != "string" || typeof name != "string")
    throw new Error("Form not submitted correctly.");
  let fields = { content, name }, joke = await db.joke.create({ data: fields });
  return (0, import_node4.redirect)(`/jokes/${joke.id}`);
};
function NewJokeRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Add your own hilarious joke" }, void 0, !1, {
      fileName: "app/routes/jokes.new.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { children: [
        "Name: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "text", name: "name" }, void 0, !1, {
          fileName: "app/routes/jokes.new.tsx",
          lineNumber: 32,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes.new.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/jokes.new.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { children: [
        "Content: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("textarea", { name: "content" }, void 0, !1, {
          fileName: "app/routes/jokes.new.tsx",
          lineNumber: 37,
          columnNumber: 22
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes.new.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/jokes.new.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "submit", className: "button", children: "Add" }, void 0, !1, {
        fileName: "app/routes/jokes.new.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/jokes.new.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes.new.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes.new.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => IndexRoute,
  links: () => links2
});
var import_react5 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-N5UQ7QMB.css";

// app/routes/_index.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: styles_default }
];
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: [
      "Remix ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "Jokes!" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 15,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Link, { to: "jokes", children: "Read Jokes" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 20,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => JokesRoute,
  links: () => links3,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-LEVQJFT3.css";

// app/routes/jokes.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), links3 = () => [
  { rel: "stylesheet", href: jokes_default }
], loader3 = async () => (0, import_node5.json)({
  jokeListItems: await db.joke.findMany()
});
function JokesRoute() {
  let data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "jokes-layout", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("header", { className: "jokes-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "home-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_react6.Link,
      {
        to: "/",
        title: "Remix Jokes",
        "aria-label": "Remix Jokes",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "logo", children: "\u{1F92A}" }, void 0, !1, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 35,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "logo-medium", children: "J\u{1F92A}KES" }, void 0, !1, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 36,
            columnNumber: 15
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 30,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "jokes-main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "jokes-list", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Link, { to: ".", children: "Get a random joke" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Here are a few more jokes to check out:" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: data.jokeListItems.map(
          ({ id, name }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Link, { to: id, children: name }, void 0, !1, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 49,
            columnNumber: 19
          }, this) }, id, !1, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this)
        ) }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Link, { to: "new", className: "button", children: "Add your own" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "jokes-outlet", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login,
  links: () => links4
});
var import_react7 = require("@remix-run/react");

// app/styles/login.css
var login_default = "/build/_assets/login-MPWT2RCD.css";

// app/utils/request.server.ts
var import_node6 = require("@remix-run/node"), badRequest = (data) => (0, import_node6.json)(data, { status: 400 });

// app/utils/session.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));
async function login({
  password,
  username
}) {
  let user = await db.user.findUnique({
    where: { username }
  });
  return !user || !await import_bcryptjs.default.compare(
    password,
    user.passwordHash
  ) ? null : { id: user.id, username };
}

// app/routes/login.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), links4 = () => [
  { rel: "stylesheet", href: login_default }
];
function validateUsername(username) {
  if (username.length < 3)
    return "Usernames must be at least 3 characters long";
}
function validatePassword(password) {
  if (password.length < 6)
    return "Passwords must be at least 6 characters long";
}
function validateUrl(url) {
  return ["/jokes", "/", "https://remix.run"].includes(url) ? url : "/jokes";
}
var action2 = async ({ request }) => {
  let form = await request.formData(), loginType = form.get("loginType"), password = form.get("password"), username = form.get("username"), redirectTo = validateUrl(
    form.get("redirectTo") || "/jokes"
  );
  if (typeof loginType != "string" || typeof password != "string" || typeof username != "string")
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Form not submitted correctly."
    });
  let fields = { loginType, password, username }, fieldErrors = {
    password: validatePassword(password),
    username: validateUsername(username)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({
      fieldErrors,
      fields,
      formError: null
    });
  switch (loginType) {
    case "login":
      if (!await login({ username, password }))
        return badRequest({
          fieldErrors: null,
          fields,
          formError: "Username/Password combination is incorrect"
        });
    case "register":
      return await db.user.findFirst({
        where: { username }
      }) ? badRequest({
        fieldErrors: null,
        fields,
        formError: `User with username ${username} already exists`
      }) : badRequest({
        fieldErrors: null,
        fields,
        formError: "Not implemented"
      });
    default:
      return badRequest({
        fieldErrors: null,
        fields,
        formError: "Login type invalid"
      });
  }
};
function Login() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let actionData = (0, import_react7.useActionData)(), [searchParams] = (0, import_react7.useSearchParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "content", "data-light": "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 123,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("form", { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "input",
          {
            type: "hidden",
            name: "redirectTo",
            value: searchParams.get("redirectTo") ?? void 0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 125,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("fieldset", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("legend", { className: "sr-only", children: "Login or Register?" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 133,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "input",
              {
                type: "radio",
                name: "loginType",
                value: "login",
                defaultChecked: !((_a = actionData == null ? void 0 : actionData.fields) != null && _a.loginType) || ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.loginType) === "login"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 137,
                columnNumber: 17
              },
              this
            ),
            " ",
            "Login"
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
              "input",
              {
                type: "radio",
                name: "loginType",
                value: "register",
                defaultChecked: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.loginType) === "register"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 149,
                columnNumber: 17
              },
              this
            ),
            " ",
            "Register"
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 148,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "username-input", children: "Username" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 162,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "input",
            {
              type: "text",
              id: "username-input",
              name: "username",
              defaultValue: (_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.username,
              "aria-invalid": Boolean(
                (_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.username
              ),
              "aria-errormessage": (_f = actionData == null ? void 0 : actionData.fieldErrors) != null && _f.username ? "username-error" : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 163,
              columnNumber: 15
            },
            this
          ),
          (_g = actionData == null ? void 0 : actionData.fieldErrors) != null && _g.username ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "p",
            {
              className: "form-validation-error",
              role: "alert",
              id: "username-error",
              children: actionData.fieldErrors.username
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 178,
              columnNumber: 13
            },
            this
          ) : null
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 161,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: "password-input", children: "Password" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 188,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "input",
            {
              id: "password-input",
              name: "password",
              type: "password",
              defaultValue: (_h = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _h.password,
              "aria-invalid": Boolean(
                (_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.password
              ),
              "aria-errormessage": (_j = actionData == null ? void 0 : actionData.fieldErrors) != null && _j.password ? "password-error" : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 189,
              columnNumber: 15
            },
            this
          ),
          (_k = actionData == null ? void 0 : actionData.fieldErrors) != null && _k.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "p",
            {
              className: "form-validation-error",
              role: "alert",
              id: "password-error",
              children: actionData.fieldErrors.password
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 204,
              columnNumber: 13
            },
            this
          ) : null
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { id: "form-error-message", children: actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "p",
          {
            className: "form-validation-error",
            role: "alert",
            children: actionData.formError
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 215,
            columnNumber: 13
          },
          this
        ) : null }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 213,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { type: "submit", className: "button", children: "Submit" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 223,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 122,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "links", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 231,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 230,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Link, { to: "/jokes", children: "Jokes" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 234,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 233,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 229,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 228,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 121,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-UQRAJFKT.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-5LHQBDB6.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-HFKFND3C.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CCNM23MC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-ABV4VJMN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes": { id: "routes/jokes", parentId: "root", path: "jokes", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes-ZMNZXHUH.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-KONDUBG3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes.$jokeId": { id: "routes/jokes.$jokeId", parentId: "routes/jokes", path: ":jokeId", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes.$jokeId-MAMVX2EP.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes._index": { id: "routes/jokes._index", parentId: "routes/jokes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/jokes._index-4FO5554H.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes.new": { id: "routes/jokes.new", parentId: "routes/jokes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes.new-VCP3IDVY.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-GWUXZU2D.js", imports: ["/build/_shared/chunk-KONDUBG3.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "ebbf8db8", hmr: { runtime: "/build/_shared\\chunk-HFKFND3C.js", timestamp: 1688535888825 }, url: "/build/manifest-EBBF8DB8.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, dev = { port: 3001 }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/jokes.$jokeId": {
    id: "routes/jokes.$jokeId",
    parentId: "routes/jokes",
    path: ":jokeId",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_jokeId_exports
  },
  "routes/jokes._index": {
    id: "routes/jokes._index",
    parentId: "routes/jokes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: jokes_index_exports
  },
  "routes/jokes.new": {
    id: "routes/jokes.new",
    parentId: "routes/jokes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_new_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/jokes": {
    id: "routes/jokes",
    parentId: "root",
    path: "jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  dev,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
