import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: {
      map: true,
    },
  },
  build: {
    assetsDir: 'assets-static', // Custom Output Directory. Default is <<assets>>
  },
});
