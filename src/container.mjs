import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { renderers } from "../dist/server/renderers.mjs";
import { manifest } from "../dist/server/entry.mjs";

const container = await AstroContainer.create({
  manifest,
  renderers,
  resolve(s) {
    const found = manifest.entryModules[s];
    if (found) {
      return `/static/${found}`;
    }
    return found;
  },
});

export default container;
