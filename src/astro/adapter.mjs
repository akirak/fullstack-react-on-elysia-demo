/** @returns {import('astro').AstroIntegration} */
export default function () {
  return {
    name: "elysia-adapter",
    hooks: {
      "astro:config:done": ({ setAdapter }) => {
        setAdapter({
          name: "elysia-adapter",
          serverEntrypoint: new URL("./server-entrypoint.mjs", import.meta.url).pathname,
          supportedAstroFeatures: {
            serverOutput: "experimental",
          },
          exports: ["manifest"],
        });
      },
      "astro:build:setup": ({ vite, target }) => {
        if (target === "server") {
          // The path is relative from the root directory specified in
          // astro.config.mjs (i.e. this directory).
          vite.build.rollupOptions.input.push("roots.ts");
        }
      },
    },
  };
}
