import { Hono } from "hono";

export const apiRoute = new Hono().get("/", (c) => c.text("Hello API!"));
export type API = typeof apiRoute;
