import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import "solid-js";

export default defineConfig({
  server: {
    port: 4000,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
  plugins: [solid()],
  publicDir: "./src/client/public",
});
