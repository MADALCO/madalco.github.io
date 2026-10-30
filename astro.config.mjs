import { defineConfig } from "astro/config";

// 公開先のドメイン。変えるときは public/CNAME と GitHub の Settings → Pages も合わせる
export default defineConfig({
  site: "https://madalco.dev",
  trailingSlash: "always",
  // CSS を HTML に埋め込み、ページ移動のときに地の色が出る前の一瞬をなくす
  build: { inlineStylesheets: "always" },
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
});
