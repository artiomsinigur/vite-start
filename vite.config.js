import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  css: {
    postcss: {
      map: true,
    },
  },
  build: {
    assetsDir: 'assets-static', // Custom Output Directory. Default is <<assets>>,
    assetsInlineLimit: 8192, // 8 KB (default) or 0 for always outputs separate files
  },
  plugins: [
    // https://github.com/JonasKruckenberg/imagetools/blob/main/docs/directives.md#blur
    imagetools({
      force: true,
      name: '[name]-[hash][extname]',
      sizes: [480, 1024],
      formats: ['webp', 'avif'],
      quality: 80,
    }),
  ],
});
