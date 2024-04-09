import type { AppLoadContext, ServerBuild } from "@remix-run/node";
import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { logger } from "hono/logger";
import { remix } from "remix-hono/handler";
import { cache } from "server/middlewares";
import { importDevBuild } from "./dev/server";

const mode =
  process.env.NODE_ENV === "test" ? "development" : process.env.NODE_ENV;

const isProductionMode = mode === "production";

const app = new Hono();

/**
 * Serve assets files from build/client/assets
 */
app.use(
  "/assets/*",
  cache(60 * 60 * 24 * 365), // 1 year
  serveStatic({ root: "./build/client" }),
);

/**
 * Proxy API requests to the API server
 */
app.get("/api/*", async (c) =>
  fetch(`${process.env.API_BASE}${c.req.path.replace("/api", "")}`),
);

/**
 * Serve public files
 */
app.use(
  "*",
  cache(60 * 60),
  serveStatic({ root: isProductionMode ? "./build/client" : "./public" }),
); // 1 hour

/**
 * Add logger middleware
 */
app.use("*", logger());

/**
 * Add remix middleware to Hono server
 */
app.use(async (c, next) => {
  if (c.req.path.startsWith("/old") || c.req.path.startsWith("/api/assets")) {
    return next();
  }

  const build = (isProductionMode
    ? // @ts-ignore
      await import("../build/server/remix.js")
    : await importDevBuild()) as unknown as ServerBuild;

  return remix({
    build,
    mode,
    getLoadContext() {
      return {
        appVersion: isProductionMode ? build.assets.version : "dev",
      } satisfies AppLoadContext;
    },
  })(c, next);
});

const port = Number(process.env.PORT) || 3000;

const exportApp = isProductionMode
  ? {
      port,
      fetch: app.fetch,
    }
  : app;

/**
 * Start the production server
 */

if (isProductionMode) {
  console.log(`🚀 Server started on port ${port}`);
}

export default exportApp;

/**
 * Declare our loaders and actions context type
 */
declare module "@remix-run/node" {
  interface AppLoadContext {
    /**
     * The app version from the build assets
     */
    readonly appVersion: string;
  }
}
