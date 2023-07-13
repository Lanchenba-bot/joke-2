import {
  Link,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-54PFTIUO.js";
import {
  require_react
} from "/build/_shared/chunk-SEUKET6G.js";
import {
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// app/routes/jokes/$id.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var JokeRoute = () => {
  const { joke, comments, userId } = useLoaderData();
  const [parentId, setParentId] = import_react2.default.useState("");
  const [view, setView] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Here's your hilarious joke:" }, void 0, false, {
      fileName: "app/routes/jokes/$id.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: joke.content }, void 0, false, {
      fileName: "app/routes/jokes/$id.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: ".", children: joke.name }, void 0, false, {
      fileName: "app/routes/jokes/$id.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    userId === joke.jokesterId && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "edit-and-delete-jokes", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "delete-button",
          name: "delete-joke",
          value: joke.id,
          children: "delete post"
        },
        void 0,
        false,
        {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 23,
          columnNumber: 13
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/jokes/$id.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: () => setView(!view),
          className: "bg-purple-600 rounded px-2 py-1 mt-4",
          children: !view ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "edit post" }, void 0, false, {
            fileName: "app/routes/jokes/$id.tsx",
            lineNumber: 37,
            columnNumber: 22
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "close" }, void 0, false, {
            fileName: "app/routes/jokes/$id.tsx",
            lineNumber: 37,
            columnNumber: 47
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 34,
          columnNumber: 11
        },
        this
      ),
      view && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", className: "edit-joke", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
          "Edit Joke:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              name: "edit-joke",
              type: "text",
              defaultValue: joke.content
            },
            void 0,
            false,
            {
              fileName: "app/routes/jokes/$id.tsx",
              lineNumber: 45,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 43,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 42,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "button", children: "update" }, void 0, false, {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/jokes/$id.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/jokes/$id.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#00000011] p-4 rounded-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
          "Comment: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "comment", type: "text" }, void 0, false, {
            fileName: "app/routes/jokes/$id.tsx",
            lineNumber: 65,
            columnNumber: 24
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "button", children: "post" }, void 0, false, {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/jokes/$id.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      comments.length !== 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "commentbox ",
          style: { overflowY: "scroll", maxHeight: "500px" },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Comments" }, void 0, false, {
              fileName: "app/routes/jokes/$id.tsx",
              lineNumber: 77,
              columnNumber: 13
            }, this),
            comments.map(
              (comment, index) => comment.content.length !== 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  className: "comments border border-[#FFFFFF33]",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
                      comment.jokester.username,
                      " "
                    ] }, void 0, true, {
                      fileName: "app/routes/jokes/$id.tsx",
                      lineNumber: 85,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: comment.content }, void 0, false, {
                      fileName: "app/routes/jokes/$id.tsx",
                      lineNumber: 86,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "delete-comment-section ", children: [
                      userId === comment.commenterId && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", className: "comment-form", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "button",
                        {
                          type: "submit",
                          className: "delete-button-comment",
                          name: "delete-comment",
                          value: comment.id,
                          children: "delete"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/jokes/$id.tsx",
                          lineNumber: 91,
                          columnNumber: 27
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/routes/jokes/$id.tsx",
                        lineNumber: 90,
                        columnNumber: 25
                      }, this),
                      comment.childComments && comment.childComments.map((reply) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "div",
                        {
                          className: "bg-[#FFFFFF33] p-5 mt-2 rounded",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: reply.content }, void 0, false, {
                              fileName: "app/routes/jokes/$id.tsx",
                              lineNumber: 106,
                              columnNumber: 29
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", className: "comment-form", children: (reply.commenterId === userId || comment.commenterId === userId) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                              "button",
                              {
                                type: "submit",
                                className: "delete-button-comment",
                                name: "delete-comment",
                                value: reply.id,
                                children: "delete"
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/routes/jokes/$id.tsx",
                                lineNumber: 111,
                                columnNumber: 33
                              },
                              this
                            ) }, void 0, false, {
                              fileName: "app/routes/jokes/$id.tsx",
                              lineNumber: 108,
                              columnNumber: 29
                            }, this)
                          ]
                        },
                        reply.id,
                        true,
                        {
                          fileName: "app/routes/jokes/$id.tsx",
                          lineNumber: 102,
                          columnNumber: 27
                        },
                        this
                      )),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: !parentId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "button",
                        {
                          className: "bg-purple-600 px-2 py-1 rounded",
                          type: "button",
                          onClick: () => setParentId(comment.id),
                          children: "Reply"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/jokes/$id.tsx",
                          lineNumber: 124,
                          columnNumber: 27
                        },
                        this
                      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "button",
                        {
                          className: "bg-red-600 px-2 py-1 rounded",
                          type: "button",
                          onClick: () => setParentId(""),
                          children: "Cancel"
                        },
                        void 0,
                        false,
                        {
                          fileName: "app/routes/jokes/$id.tsx",
                          lineNumber: 131,
                          columnNumber: 27
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "app/routes/jokes/$id.tsx",
                        lineNumber: 122,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/jokes/$id.tsx",
                      lineNumber: 88,
                      columnNumber: 21
                    }, this),
                    parentId === comment.id && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "form",
                      {
                        method: "post",
                        className: "mt-2 bg-slate-500 p-5 rounded ",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
                            "Replying to ",
                            comment.jokester.username,
                            ":",
                            " ",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "comment", type: "text" }, void 0, false, {
                              fileName: "app/routes/jokes/$id.tsx",
                              lineNumber: 147,
                              columnNumber: 29
                            }, this)
                          ] }, void 0, true, {
                            fileName: "app/routes/jokes/$id.tsx",
                            lineNumber: 145,
                            columnNumber: 27
                          }, this) }, void 0, false, {
                            fileName: "app/routes/jokes/$id.tsx",
                            lineNumber: 144,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "parentId", value: parentId }, void 0, false, {
                            fileName: "app/routes/jokes/$id.tsx",
                            lineNumber: 150,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "button", children: "reply" }, void 0, false, {
                            fileName: "app/routes/jokes/$id.tsx",
                            lineNumber: 151,
                            columnNumber: 25
                          }, this)
                        ]
                      },
                      void 0,
                      true,
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
                true,
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
        true,
        {
          fileName: "app/routes/jokes/$id.tsx",
          lineNumber: 74,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/jokes/$id.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/jokes/$id.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
};
var id_default = JokeRoute;
export {
  id_default as default
};
//# sourceMappingURL=/build/routes/jokes/$id-LXS757G5.js.map
