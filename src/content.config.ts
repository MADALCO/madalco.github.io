import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const works = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: z.object({
    no: z.number(),
    title: z.string(),
    kana: z.string().optional(),
    tagline: z.string(),
    genre: z.string(),
    year: z.number(),
    status: z.enum(["開発中", "公開中", "公開準備中", "終了"]),
    platforms: z.array(z.string()),
    players: z.string(),
    engine: z.string(),
    palette: z.object({ bg: z.string(), fg: z.string(), accent: z.string(), accent2: z.string() }),
    loop: z.string().optional(),
    poster: z.string(),
    trailer: z.string().optional(),
    trailerPoster: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), caption: z.string() })).default([]),
    features: z.array(z.object({ title: z.string(), body: z.string() })).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string().optional(), note: z.string().optional() })).default([]),
  }),
});

export const collections = { works };
