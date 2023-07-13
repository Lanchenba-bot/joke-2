var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// app/routes/jokes/$id.comments.tsx
var require_id_comments = __commonJS({
  "app/routes/jokes/$id.comments.tsx"() {
    "use strict";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
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
var global_large_default = "/build/_assets/global-large-NMBC7QXE.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-LTH6YFKS.css";

// app/styles/global.css
var global_default = "/build/_assets/global-PTW6F3XD.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ZJ5MGX4E.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Remix: So great, it's funny!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader
});
var import_node3 = require("@remix-run/node");

// app/utils/session.server.ts
var import_node2 = require("@remix-run/node"), import_bcryptjs = __toESM(require("bcryptjs"));

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), db = global.__db__, db.$connect();

// app/utils/session.server.ts
async function register({
  password,
  username
}) {
  let passwordHash = await import_bcryptjs.default.hash(password, 10);
  return { id: (await db.user.create({
    data: { passwordHash, username }
  })).id, username };
}
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
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "RJ_session",
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return !userId || typeof userId != "string" ? null : userId;
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId || typeof userId != "string") {
    let searchParams = new URLSearchParams([
      ["redirectTo", redirectTo]
    ]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (typeof userId != "string")
    return null;
  let user = await db.user.findUnique({
    select: { id: !0, username: !0 },
    where: { id: userId }
  });
  if (!user)
    throw logout(request);
  return user;
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_node2.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
async function createUserSession(userId, redirectTo) {
  let session = await storage.getSession();
  return session.set("userId", userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// app/routes/logout.tsx
var action = async ({ request }) => logout(request), loader = async () => (0, import_node3.redirect)("/");

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  links: () => links2
});
var import_react3 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-FJ3PZEQB.css";

// app/routes/index.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links2 = () => [
  { rel: "stylesheet", href: styles_default }
];
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
      "Remix ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Jokes!" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 15,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "jokes", children: "Read Jokes" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 20,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 19,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => JokesRoute,
  links: () => links3,
  loader: () => loader4
});
var import_react4 = require("@remix-run/react");

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-JQWM6NKN.css";

// node_modules/.pnpm/@uppy+core@3.3.0/node_modules/@uppy/core/dist/style.min.css
var style_min_default = "/build/_assets/style.min-RLI3TQBC.css";

// node_modules/.pnpm/@uppy+drag-drop@3.0.2_@uppy+core@3.3.0/node_modules/@uppy/drag-drop/dist/style.min.css
var style_min_default2 = "/build/_assets/style.min-KF7SKBUZ.css";

// node_modules/.pnpm/@uppy+dashboard@3.4.1_@uppy+core@3.3.0/node_modules/@uppy/dashboard/dist/style.css
var style_default = "/build/_assets/style-BJ2CC2FJ.css";

// app/controllers/jokes/show.ts
var loader2 = async ({ request, params }) => {
  let userId = await getUserId(request), user = await getUser(request), joke = await db.joke.findFirst({
    where: { id: params.id }
  });
  if (!joke)
    throw new Error("Joke not found");
  let comments = await db.comment.findMany({
    orderBy: { createdAt: "desc" },
    where: { jokeId: joke.id, parentId: null },
    include: { jokester: !0, childComments: !0 }
  });
  return { joke, comments, userId, user };
};

// app/controllers/jokes/list.ts
var loader3 = async ({ request }) => {
  let user = await getUser(request), userid = await getUserId(request), jokes = await db.joke.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: !0, jokesterId: !0, name: !0 }
  });
  return console.log(jokes), { jokes, user, userid };
};

// app/controllers/jokes/create.ts
var import_node5 = require("@remix-run/node");

// app/controllers/controller-hooks/ensure-user-present.ts
var import_node4 = require("@remix-run/node");
var ensureUserPresent = async ({ request }) => {
  let userId = await requireUserId(request), user = await db.user.findFirst({ where: { id: userId } });
  if (!user)
    throw (0, import_node4.redirect)("/login");
  return { user };
};

// app/controllers/jokes/create.ts
var action2 = async ({ request, params }) => {
  var _a;
  let { user } = await ensureUserPresent({ request }), form = await request.formData(), content = (_a = form.get("comment")) == null ? void 0 : _a.toString(), parentId = form.get("parentId"), jokeId = params.id;
  if (!jokeId)
    throw (0, import_node5.redirect)("/jokes");
  if (form.has("delete-joke"))
    throw await db.joke.findFirst({
      where: {
        id: jokeId,
        jokesterId: user.id
      }
    }) && await db.joke.delete({
      where: {
        id: jokeId
      }
    }), (0, import_node5.redirect)("/jokes");
  if (form.has("delete-comment")) {
    let commentId = form.get("delete-comment");
    return await db.comment.delete({
      where: {
        id: commentId
      }
    }), null;
  }
  if (form.has("edit-joke")) {
    let updatedContent = form.get("edit-joke");
    return await db.joke.update({
      where: {
        id: jokeId
      },
      data: {
        content: updatedContent
      }
    }), null;
  }
  if (content && content.length > 0) {
    let comment = await db.comment.create({
      data: {
        jokeId,
        content,
        parentId,
        commenterId: user.id
      }
    });
  }
  return null;
};

// app/routes/jokes.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links3 = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: jokes_default },
  { rel: "stylesheet", href: style_min_default },
  { rel: "stylesheet", href: style_min_default2 },
  { rel: "stylesheet", href: style_default }
], loader4 = loader3;
function JokesRoute() {
  let { jokes, userid, user } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "jokes-layout", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: "jokes-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "home-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/", title: "Remix Jokes", "aria-label": "Remix Jokes", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "logo", children: "\u{1F92A}" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 29,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "logo-medium", children: "J\u{1F92A}KES" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 30,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      user ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "user-info", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: `Hi ${user.username}` }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 35,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", className: "button", children: "Logout" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 37,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 36,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "/login", children: "Login" }, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "jokes-main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "jokes-list", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: ".", children: "Get a random joke" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Here are a few more jokes to check out:" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: jokes.map(
          ({ id, name }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: id, children: name }, void 0, !1, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 55,
            columnNumber: 19
          }, this) }, id, !1, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 54,
            columnNumber: 15
          }, this)
        ) }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "All my jokes:" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: jokes.map(
          ({ id, jokesterId, name }) => userid === jokesterId && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: id, children: name }, void 0, !1, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 65,
            columnNumber: 23
          }, this) }, id, !1, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, this)
        ) }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Link, { to: "new", className: "button", children: "Add your own" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "jokes-outlet", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
var route4 = __toESM(require_id_comments());

// app/routes/jokes/index.tsx
var jokes_exports2 = {};
__export(jokes_exports2, {
  default: () => JokesIndexRoute,
  loader: () => loader5
});
var import_node6 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader5 = async () => {
  let count = await db.joke.count(), randomRowNumber = Math.floor(Math.random() * count), [randomJoke] = await db.joke.findMany({
    skip: randomRowNumber,
    take: 1
  });
  return (0, import_node6.json)({ randomJoke });
};
function JokesIndexRoute() {
  let data = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Here's a random joke:" }, void 0, !1, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: data.randomJoke.content }, void 0, !1, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { to: data.randomJoke.id, children: [
      '"',
      data.randomJoke.name,
      '" Permalink'
    ] }, void 0, !0, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/jokes/$id.tsx
var id_exports = {};
__export(id_exports, {
  action: () => action3,
  default: () => id_default,
  loader: () => loader6
});
var import_react6 = require("@remix-run/react"), import_react7 = __toESM(require("react"));
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), action3 = action2, loader6 = loader2, JokeRoute = () => {
  let { joke, comments, userId } = (0, import_react6.useLoaderData)(), [parentId, setParentId] = import_react7.default.useState(""), [view, setView] = (0, import_react7.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Here's your hilarious joke:" }, void 0, !1, {
      fileName: "app/routes/jokes/$id.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: joke.content }, void 0, !1, {
      fileName: "app/routes/jokes/$id.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Link, { to: ".", children: joke.name }, void 0, !1, {
      fileName: "app/routes/jokes/$id.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    userId === joke.jokesterId && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "edit-and-delete-jokes", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "delete-button",
          name: "delete-joke",
          value: joke.id,
          children: "delete post"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 23,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/jokes/$id.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "button",
        {
          onClick: () => setView(!view),
          className: "bg-purple-600 rounded px-2 py-1 mt-4",
          children: view ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "close" }, void 0, !1, {
            fileName: "app/routes/jokes/$id.tsx",
            lineNumber: 37,
            columnNumber: 47
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: "edit post" }, void 0, !1, {
            fileName: "app/routes/jokes/$id.tsx",
            lineNumber: 37,
            columnNumber: 22
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 34,
          columnNumber: 11
        },
        this
      ),
      view && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { method: "post", className: "edit-joke", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { children: [
          "Edit Joke:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "input",
            {
              name: "edit-joke",
              type: "text",
              defaultValue: joke.content
            },
            void 0,
            !1,
            {
              fileName: "app/routes/jokes/$id.tsx",
              lineNumber: 45,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 43,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 42,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "submit", className: "button", children: "update" }, void 0, !1, {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/$id.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes/$id.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "bg-[#00000011] p-4 rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { children: [
          "Comment: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { name: "comment", type: "text" }, void 0, !1, {
            fileName: "app/routes/jokes/$id.tsx",
            lineNumber: 65,
            columnNumber: 24
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "submit", className: "button", children: "post" }, void 0, !1, {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/$id.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      comments.length !== 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "div",
        {
          className: "commentbox ",
          style: { overflowY: "scroll", maxHeight: "500px" },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Comments" }, void 0, !1, {
              fileName: "app/routes/jokes/$id.tsx",
              lineNumber: 77,
              columnNumber: 13
            }, this),
            comments.map(
              (comment, index) => comment.content.length !== 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "div",
                {
                  className: "comments border border-[#FFFFFF33]",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: [
                      comment.jokester.username,
                      " "
                    ] }, void 0, !0, {
                      fileName: "app/routes/jokes/$id.tsx",
                      lineNumber: 85,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: comment.content }, void 0, !1, {
                      fileName: "app/routes/jokes/$id.tsx",
                      lineNumber: 86,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "delete-comment-section ", children: [
                      userId === comment.commenterId && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { method: "post", className: "comment-form", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                        "button",
                        {
                          type: "submit",
                          className: "delete-button-comment",
                          name: "delete-comment",
                          value: comment.id,
                          children: "delete"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/jokes/$id.tsx",
                          lineNumber: 91,
                          columnNumber: 27
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/routes/jokes/$id.tsx",
                        lineNumber: 90,
                        columnNumber: 25
                      }, this),
                      comment.childComments && comment.childComments.map((reply) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                        "div",
                        {
                          className: "bg-[#FFFFFF33] p-5 mt-2 rounded",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: reply.content }, void 0, !1, {
                              fileName: "app/routes/jokes/$id.tsx",
                              lineNumber: 106,
                              columnNumber: 29
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { method: "post", className: "comment-form", children: (reply.commenterId === userId || comment.commenterId === userId) && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                              "button",
                              {
                                type: "submit",
                                className: "delete-button-comment",
                                name: "delete-comment",
                                value: reply.id,
                                children: "delete"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/routes/jokes/$id.tsx",
                                lineNumber: 111,
                                columnNumber: 33
                              },
                              this
                            ) }, void 0, !1, {
                              fileName: "app/routes/jokes/$id.tsx",
                              lineNumber: 108,
                              columnNumber: 29
                            }, this)
                          ]
                        },
                        reply.id,
                        !0,
                        {
                          fileName: "app/routes/jokes/$id.tsx",
                          lineNumber: 102,
                          columnNumber: 27
                        },
                        this
                      )),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-2", children: parentId ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                        "button",
                        {
                          className: "bg-red-600 px-2 py-1 rounded",
                          type: "button",
                          onClick: () => setParentId(""),
                          children: "Cancel"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/jokes/$id.tsx",
                          lineNumber: 131,
                          columnNumber: 27
                        },
                        this
                      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                        "button",
                        {
                          className: "bg-purple-600 px-2 py-1 rounded",
                          type: "button",
                          onClick: () => setParentId(comment.id),
                          children: "Reply"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/jokes/$id.tsx",
                          lineNumber: 124,
                          columnNumber: 27
                        },
                        this
                      ) }, void 0, !1, {
                        fileName: "app/routes/jokes/$id.tsx",
                        lineNumber: 122,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/routes/jokes/$id.tsx",
                      lineNumber: 88,
                      columnNumber: 21
                    }, this),
                    parentId === comment.id && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      "form",
                      {
                        method: "post",
                        className: "mt-2 bg-slate-500 p-5 rounded ",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { children: [
                            "Replying to ",
                            comment.jokester.username,
                            ":",
                            " ",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { name: "comment", type: "text" }, void 0, !1, {
                              fileName: "app/routes/jokes/$id.tsx",
                              lineNumber: 147,
                              columnNumber: 29
                            }, this)
                          ] }, void 0, !0, {
                            fileName: "app/routes/jokes/$id.tsx",
                            lineNumber: 145,
                            columnNumber: 27
                          }, this) }, void 0, !1, {
                            fileName: "app/routes/jokes/$id.tsx",
                            lineNumber: 144,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "hidden", name: "parentId", value: parentId }, void 0, !1, {
                            fileName: "app/routes/jokes/$id.tsx",
                            lineNumber: 150,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "submit", className: "button", children: "reply" }, void 0, !1, {
                            fileName: "app/routes/jokes/$id.tsx",
                            lineNumber: 151,
                            columnNumber: 25
                          }, this)
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/jokes/$id.tsx",
                        lineNumber: 141,
                        columnNumber: 23
                      },
                      this
                    )
                  ]
                },
                index,
                !0,
                {
                  fileName: "app/routes/jokes/$id.tsx",
                  lineNumber: 82,
                  columnNumber: 19
                },
                this
              )
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 74,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/jokes/$id.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/$id.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}, id_default = JokeRoute;

// app/routes/jokes/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action4,
  default: () => NewJokeRoute
});
var import_node8 = require("@remix-run/node"), import_react9 = require("@remix-run/react");

// app/utils/request.server.ts
var import_node7 = require("@remix-run/node"), badRequest = (data) => (0, import_node7.json)(data, { status: 400 });

// app/components/upload-file.tsx
var import_react8 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), getEnv = process.env.NEXT_PUBLIC_UPPY_TUS_ENDPOINT, useClientUppy = ({ destinations }) => {
  let [uppy, setUppy] = (0, import_react8.useState)(null), DashboardModalRef = (0, import_react8.useRef)(null);
  (0, import_react8.useEffect)(() => {
    (async () => {
      let { Dashboard: Dashboard2 } = await import("@uppy/react"), Uppy = (await import("@uppy/core")).default, Tus = (await import("@uppy/tus")).default, uppy2 = new Uppy({
        debug: !0,
        autoProceed: !1,
        restrictions: {
          maxNumberOfFiles: 1
        }
      });
      destinations.includes("tus") && uppy2.use(Tus, {
        endpoint: getEnv
      }), DashboardModalRef.current = Dashboard2, setUppy(uppy2);
    })();
  }, []);
  let Dashboard = DashboardModalRef.current;
  return { uppy, Dashboard };
}, UploadFile = ({
  button: { label: buttonLabel = "Upload", props: buttonProps = {} } = {},
  destinations = ["tus"],
  onComplete = () => {
  },
  ...forwardedProps
}) => {
  let { uppy, Dashboard } = useClientUppy({ destinations }), [open, setOpen] = (0, import_react8.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { onClick: () => setOpen(!open), ...buttonProps, children: buttonLabel }, void 0, !1, {
      fileName: "app/components/upload-file.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    Dashboard && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      Dashboard,
      {
        uppy,
        showProgressDetails: !0,
        waitForThumbnailsBeforeUpload: !0
      },
      void 0,
      !1,
      {
        fileName: "app/components/upload-file.tsx",
        lineNumber: 67,
        columnNumber: 22
      },
      this
    ),
    "hiii"
  ] }, void 0, !0, {
    fileName: "app/components/upload-file.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
};

// app/routes/jokes/new.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function validateJokeContent(content) {
  if (content.length < 10)
    return "That joke is too short";
}
function validateJokeName(name) {
  if (name.length < 3)
    return "That joke's name is too short";
}
var action4 = async ({ request }) => {
  let { user } = await ensureUserPresent({ request }), form = await request.formData(), content = form.get("content"), name = form.get("name");
  if (typeof content != "string" || typeof name != "string")
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Form not submitted correctly."
    });
  let fieldErrors = {
    content: validateJokeContent(content),
    name: validateJokeName(name)
  }, fields = { content, name };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({
      fieldErrors,
      fields,
      formError: null
    });
  let joke = await db.joke.create({
    data: { ...fields, jokesterId: user.id }
  });
  return (0, import_node8.redirect)(`/jokes/${joke.id}`);
};
function NewJokeRoute() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let actionData = (0, import_react9.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(UploadFile, {}, void 0, !1, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Add your own hilarious joke" }, void 0, !1, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("form", { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { children: [
          "Name:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "input",
            {
              defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.name,
              name: "name",
              type: "text",
              "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.name),
              "aria-errormessage": (_c = actionData == null ? void 0 : actionData.fieldErrors) != null && _c.name ? "name-error" : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/jokes/new.tsx",
              lineNumber: 68,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        (_d = actionData == null ? void 0 : actionData.fieldErrors) != null && _d.name ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "form-validation-error", id: "name-error", role: "alert", children: actionData.fieldErrors.name }, void 0, !1, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { children: [
          "Content:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
            "textarea",
            {
              defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.content,
              name: "content",
              "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.content),
              "aria-errormessage": (_g = actionData == null ? void 0 : actionData.fieldErrors) != null && _g.content ? "content-error" : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/jokes/new.tsx",
              lineNumber: 87,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        (_h = actionData == null ? void 0 : actionData.fieldErrors) != null && _h.content ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "p",
          {
            className: "form-validation-error",
            id: "content-error",
            role: "alert",
            children: actionData.fieldErrors.content
          },
          void 0,
          !1,
          {
            fileName: "app/routes/jokes/new.tsx",
            lineNumber: 97,
            columnNumber: 13
          },
          this
        ) : null
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
        actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "form-validation-error", role: "alert", children: actionData.formError }, void 0, !1, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { type: "submit", className: "button", children: "Add" }, void 0, !1, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "file", id: "img", name: "img", accept: "image/*" }, void 0, !1, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/new.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action6,
  default: () => Login,
  links: () => links4
});
var import_react10 = require("@remix-run/react");

// app/styles/login.css
var login_default = "/build/_assets/login-TMP76G53.css";

// app/controllers/login/create.ts
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
var action5 = async ({ request }) => {
  let form = await request.formData(), loginType = form.get("loginType"), password = form.get("password"), username = form.get("username"), redirectTo = validateUrl(form.get("redirectTo") || "/jokes");
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
    case "login": {
      let user = await login({ username, password });
      return console.log({ user }), user ? createUserSession(user.id, redirectTo) : badRequest({
        fieldErrors: null,
        fields,
        formError: "Username/Password combination is incorrect"
      });
    }
    case "register": {
      if (await db.user.findFirst({
        where: { username }
      }))
        return badRequest({
          fieldErrors: null,
          fields,
          formError: `User with username ${username} already exists`
        });
      let user = await register({ username, password });
      return user ? createUserSession(user.id, redirectTo) : badRequest({
        fieldErrors: null,
        fields,
        formError: "Something went wrong trying to create a new user."
      });
    }
    default:
      return badRequest({
        fieldErrors: null,
        fields,
        formError: "Login type invalid"
      });
  }
};

// app/routes/login.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links4 = () => [
  { rel: "stylesheet", href: login_default }
], action6 = action5;
function Login() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let actionData = (0, import_react10.useActionData)(), [searchParams] = (0, import_react10.useSearchParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "content", "data-light": "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("form", { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
            lineNumber: 20,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("fieldset", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("legend", { className: "sr-only", children: "Login or Register?" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 26,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
                lineNumber: 28,
                columnNumber: 15
              },
              this
            ),
            " ",
            "Login"
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
                lineNumber: 40,
                columnNumber: 15
              },
              this
            ),
            " ",
            "Register"
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 39,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "username-input", children: "Username" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "input",
            {
              type: "text",
              id: "username-input",
              name: "username",
              defaultValue: (_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.username,
              "aria-invalid": Boolean((_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.username),
              "aria-errormessage": (_f = actionData == null ? void 0 : actionData.fieldErrors) != null && _f.username ? "username-error" : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 51,
              columnNumber: 13
            },
            this
          ),
          (_g = actionData == null ? void 0 : actionData.fieldErrors) != null && _g.username ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
              lineNumber: 62,
              columnNumber: 13
            },
            this
          ) : null
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "password-input", children: "Password" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "input",
            {
              id: "password-input",
              name: "password",
              type: "password",
              defaultValue: (_h = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _h.password,
              "aria-invalid": Boolean((_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.password),
              "aria-errormessage": (_j = actionData == null ? void 0 : actionData.fieldErrors) != null && _j.password ? "password-error" : void 0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 72,
              columnNumber: 13
            },
            this
          ),
          (_k = actionData == null ? void 0 : actionData.fieldErrors) != null && _k.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
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
              lineNumber: 83,
              columnNumber: 13
            },
            this
          ) : null
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { id: "form-error-message", children: actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "form-validation-error", role: "alert", children: actionData.formError }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this) : null }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { type: "submit", className: "button", children: "Submit" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "links", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 106,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Link, { to: "/jokes", children: "Jokes" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 109,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-P5CBATW2.js", imports: ["/build/_shared/chunk-54PFTIUO.js", "/build/_shared/chunk-SEUKET6G.js", "/build/_shared/chunk-4D7IJTTE.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CPSFDSFJ.js", imports: ["/build/_shared/chunk-SZCBWS73.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-VF36PMFG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes": { id: "routes/jokes", parentId: "root", path: "jokes", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes-BKRBGGGW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/$id": { id: "routes/jokes/$id", parentId: "routes/jokes", path: ":id", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/$id-LXS757G5.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/$id.comments": { id: "routes/jokes/$id.comments", parentId: "routes/jokes", path: ":id/comments", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/$id.comments-URUCBT5R.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/index": { id: "routes/jokes/index", parentId: "routes/jokes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/jokes/index-VF5V6AUK.js", imports: ["/build/_shared/chunk-LQJX25IX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/new": { id: "routes/jokes/new", parentId: "routes/jokes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/new-CMA7A3A4.js", imports: ["/build/_shared/chunk-LQJX25IX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-X7JQ4PD6.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-RPFIZTEJ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "a56bddbc", hmr: void 0, url: "/build/manifest-A56BDDBC.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/jokes": {
    id: "routes/jokes",
    parentId: "root",
    path: "jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports
  },
  "routes/jokes/$id.comments": {
    id: "routes/jokes/$id.comments",
    parentId: "routes/jokes",
    path: ":id/comments",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/jokes/index": {
    id: "routes/jokes/index",
    parentId: "routes/jokes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: jokes_exports2
  },
  "routes/jokes/$id": {
    id: "routes/jokes/$id",
    parentId: "routes/jokes",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/jokes/new": {
    id: "routes/jokes/new",
    parentId: "routes/jokes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
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
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
