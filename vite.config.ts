import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "styled-vanilla-extract/vite";

import { name, version } from "./package.json";

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), vanillaExtractPlugin()],
    define: {
      APP_NAME: `"${name}"`,
      APP_VERSION: `"${version}"`,
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
