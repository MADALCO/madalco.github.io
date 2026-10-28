import { defineConfig } from "astro/config";

// 独自ドメインに移したら site をそのドメインに変える（public/CNAME も置く）
export default defineConfig({
  site: "https://madalco.github.io",
  trailingSlash: "always",
  // CSS を HTML に埋め込み、ページ移動のときに地の色が出る前の一瞬をなくす
  build: { inlineStylesheets: "always" },
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
});
