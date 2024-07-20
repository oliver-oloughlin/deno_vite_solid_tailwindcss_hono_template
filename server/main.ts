import { Hono } from "hono"

const app = new Hono()

Deno.serve(app.fetch)
