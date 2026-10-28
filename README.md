# madalco.github.io

madalco のサイト（作品一覧とプライバシーポリシー）。Astro の静的サイトで、`main` に push すると GitHub Actions が GitHub Pages に公開する。

```
npm ci
npm run dev      # http://localhost:4321
npm run build
```

- 作品は `src/content/works/*.md` に 1 作品 1 ファイル。足し方とデザインの決まりは [DESIGN.md](DESIGN.md)。
- `brand/` にロゴ（EOS のブランド設定用 128×128 と 1024×1024）。`public/logo-128.png` も同じもの。
- 独自ドメインに移すときは `public/CNAME` を置き、`astro.config.mjs` の `site` を変える。
