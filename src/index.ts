import { Elysia, t } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import * as roots from "../dist/server/roots.mjs";
import container from "./container";

const app = new Elysia()
  // Make Astro-generated client components available to the user.
  .use(staticPlugin({
    assets: "dist/client",
    prefix: "/static",
  }))
  .get("/", async ({ query }) => {
    return await container.renderToResponse(roots.Hello, {
      props: {
        // Pass a query parameter as a property to the Astro component
        name: query.name
      }
    });
  }, {
    // Define the schema of query parameters using Elysia.t.
    query: t.Object({
      name: t.Optional(t.String())
    })
  }).listen(3000);

// eslint-disable-next-line no-console
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
