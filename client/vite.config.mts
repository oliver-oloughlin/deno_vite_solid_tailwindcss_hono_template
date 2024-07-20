import { defineConfig, type Plugin } from "vite";
import solid from "vite-plugin-solid";
import "solid-js";

export default defineConfig({
  plugins: [solid() as Plugin],
});
