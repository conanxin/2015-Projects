// @ts-check
import { defineConfig } from 'astro/config';

// 2015 Projects Reborn — V0.1
// Static-only, no SSR, no adapter. Output target 'static' is the default and is the only one we want.
export default defineConfig({
  site: 'https://conanxin.github.io',
  base: '/2015-Projects',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
});
