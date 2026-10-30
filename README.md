# madalco.github.io

madalco のサイト（作品一覧とプライバシーポリシー）。Astro の静的サイトで、`main` に push すると GitHub Actions が GitHub Pages に公開する。

```
npm ci
npm run dev      # http://localhost:4321
npm run build
```

- 作品は `src/content/works/*.md` に 1 作品 1 ファイル。足し方とデザインの決まりは [DESIGN.md](DESIGN.md)。
- `brand/` にロゴ。madalco のマーク（`logo-*.png`）と、EOS のブランド設定に使う Submarine 3D のロゴ（`submarine3d-logo-*.png`、128 版は `/works/submarine-3d/logo-128.png` でも公開）。
- ドメインは madalco.dev（`public/CNAME` と `astro.config.mjs` の `site`、GitHub の Settings → Pages の Custom domain をそろえる）。
