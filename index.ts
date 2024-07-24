/// <reference lib="deno.ns" />

import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { serveStatic } from "hono/deno";
import { apiRoute } from "./src/api/index.ts";

const IS_DEV = Deno.args[0] === "dev";

const app = new Hono();

if (IS_DEV) {
  app.use(cors());
}

app.use(logger());
app.route("/api", apiRoute);

if (!IS_DEV) {
  app.use(serveStatic({ root: "./dist/" }));
}

Deno.serve(app.fetch);
