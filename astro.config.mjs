// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const ReactCompilerConfig = {
  target: "19",
};

// https://astro.build/config
export default defineConfig({
  site: "https://joska-p.github.io/astro-starter-kit/",
  base: "astro-starter-kit/",
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
