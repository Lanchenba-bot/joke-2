const { createRoutesFromFolders } = require("@remix-run/v1-route-convention")
/** @type {import('@remix-run/dev').AppConfig} */

module.exports = {
  tailwind: true,
  serverDependenciesToBundle: [],
  ignoredRouteFiles: ["**/.*"],
  // When running locally in development mode, we use the built-in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === "development" ? undefined : "./server.ts",
  serverBuildPath: "api/index.js",
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  future: {
    v2_errorBoundary: false,
    v2_headers: false,
    v2_meta: false,
    v2_normalizeFormMethod: false,
    v2_routeConvention: false,
  },
  routes(defineRoutes) {
    return createRoutesFromFolders(defineRoutes)
  },
}
