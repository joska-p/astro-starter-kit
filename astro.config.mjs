// @ts-check
import process from "process";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const { SITE_URL, BASE_URL } = loadEnv(
  process.env.NODE_ENV || "development",
  process.cwd(),
  "",
);

const ReactCompilerConfig = {
  target: "19",
};

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_URL,
  integrations: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
