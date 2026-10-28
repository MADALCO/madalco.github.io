import { defineConfig } from "astro/config";

// 独自ドメインに移したら site をそのドメインに変える（public/CNAME も置く）
export default defineConfig({
  site: "https://madalco.github.io",
  trailingSlash: "always",
});
