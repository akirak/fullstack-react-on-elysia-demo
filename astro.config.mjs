import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import adapter from "./src/astro/adapter.mjs";

// https://astro.build/config
export default defineConfig({
  root: "src/astro",
  output: "server",
  adapter: adapter(),
  integrations: [react()],
});
