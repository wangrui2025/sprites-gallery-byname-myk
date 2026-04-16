import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wangrui2025.github.io',
  base: '/sprites-gallery-byname',
  output: 'static',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
