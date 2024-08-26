import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  base: './', // Use relative paths for all assets
  build: {
    outDir: '../../dist/build', // Save output directly in the root dist folder
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/renderer/index.html'), // Set the entry point
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        // Organize assets into folders based on their type
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name].[ext]';
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(name ?? '')) {
            return 'assets/fonts/[name].[ext]';
          }
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
      },
    },
  },
  server: {
    port: 9000,
    open: true,
  },
  root: 'src/renderer/',
  publicDir: '../public',
});
