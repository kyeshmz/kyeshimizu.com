import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://kyeshimizu.com',
  integrations: [preact(), prefetch(), sitemap(), tailwind(), mdx()],
  output: "static",
  adapter: cloudflare()
});