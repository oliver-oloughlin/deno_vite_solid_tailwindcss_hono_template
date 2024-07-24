import { hc } from "hono/client";
import type { API } from "../../api/index.ts";

export const api = hc<API>("/api")
