# madalco.github.io

madalco のサイト（作品一覧とプライバシーポリシー）。Astro の静的サイトで、`main` に push すると GitHub Actions が GitHub Pages に公開する。

```
npm ci
npm run dev      # http://localhost:4321
npm run build
```

- 作品は `src/content/works/*.md` に 1 作品 1 ファイル。足し方とデザインの決まりは [DESIGN.md](DESIGN.md)。
- `brand/` にロゴ（EOS のブランド設定用 128×128 と 1024×1024）。`public/logo-128.png` も同じもの。
- ドメインは madalco.dev（`public/CNAME` と `astro.config.mjs` の `site`、GitHub の Settings → Pages の Custom domain をそろえる）。
