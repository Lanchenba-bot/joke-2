import {
  require_db,
  require_node
} from "/build/_shared/chunk-LQJX25IX.js";
import {
  require_jsx_dev_runtime,
  useActionData
} from "/build/_shared/chunk-54PFTIUO.js";
import {
  require_react
} from "/build/_shared/chunk-SEUKET6G.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-4D7IJTTE.js";

// empty-module:~/utils/request.server
var require_request = __commonJS({
  "empty-module:~/utils/request.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/jokes/new.tsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_request = __toESM(require_request());

// app/components/upload-file.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var getEnv = process.env.NEXT_PUBLIC_UPPY_TUS_ENDPOINT;
var useClientUppy = ({ destinations }) => {
  const [uppy, setUppy] = (0, import_react.useState)(null);
  const DashboardModalRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const execute = async () => {
      const { Dashboard: Dashboard2 } = await import("/build/_shared/lib-BOZRWUB2.js");
      const Uppy = (await import("/build/_shared/lib-GVLAEYYB.js")).default;
      const Tus = (await import("/build/_shared/lib-LT5CEZ2P.js")).default;
      const uppy2 = new Uppy({
        debug: true,
        autoProceed: false,
        restrictions: {
          maxNumberOfFiles: 1
        }
      });
      if (destinations.includes("tus")) {
        uppy2.use(Tus, {
          endpoint: getEnv
        });
      }
      DashboardModalRef.current = Dashboard2;
      setUppy(uppy2);
    };
    execute();
  }, []);
  const Dashboard = DashboardModalRef.current;
  return { uppy, Dashboard };
};
var UploadFile = ({
  button: { label: buttonLabel = "Upload", props: buttonProps = {} } = {},
  destinations = ["tus"],
  onComplete = () => {
  },
  ...forwardedProps
}) => {
  const { uppy, Dashboard } = useClientUppy({ destinations });
  const [open, setOpen] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setOpen(!open), ...buttonProps, children: buttonLabel }, void 0, false, {
      fileName: "app/components/upload-file.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    Dashboard && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Dashboard,
      {
        uppy,
        showProgressDetails: true,
        waitForThumbnailsBeforeUpload: true
      },
      void 0,
      false,
      {
        fileName: "app/components/upload-file.tsx",
        lineNumber: 67,
        columnNumber: 22
      },
      this
    ),
    "hiii"
  ] }, void 0, true, {
    fileName: "app/components/upload-file.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, this);
};

// app/routes/jokes/new.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function NewJokeRoute() {
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UploadFile, {}, void 0, false, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Add your own hilarious joke" }, void 0, false, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { children: [
          "Name:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "input",
            {
              defaultValue: actionData?.fields?.name,
              name: "name",
              type: "text",
              "aria-invalid": Boolean(actionData?.fieldErrors?.name),
              "aria-errormessage": actionData?.fieldErrors?.name ? "name-error" : void 0
            },
            void 0,
            false,
            {
              fileName: "app/routes/jokes/new.tsx",
              lineNumber: 68,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        actionData?.fieldErrors?.name ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "form-validation-error", id: "name-error", role: "alert", children: actionData.fieldErrors.name }, void 0, false, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { children: [
          "Content:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "textarea",
            {
              defaultValue: actionData?.fields?.content,
              name: "content",
              "aria-invalid": Boolean(actionData?.fieldErrors?.content),
              "aria-errormessage": actionData?.fieldErrors?.content ? "content-error" : void 0
            },
            void 0,
            false,
            {
              fileName: "app/routes/jokes/new.tsx",
              lineNumber: 87,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        actionData?.fieldErrors?.content ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "p",
          {
            className: "form-validation-error",
            id: "content-error",
            role: "alert",
            children: actionData.fieldErrors.content
          },
          void 0,
          false,
          {
            fileName: "app/routes/jokes/new.tsx",
            lineNumber: 97,
            columnNumber: 13
          },
          this
        ) : null
      ] }, void 0, true, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        actionData?.formError ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "form-validation-error", role: "alert", children: actionData.formError }, void 0, false, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "button", children: "Add" }, void 0, false, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "file", id: "img", name: "img", accept: "image/*" }, void 0, false, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/jokes/new.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
export {
  NewJokeRoute as default
};
//# sourceMappingURL=/build/routes/jokes/new-CMA7A3A4.js.map
