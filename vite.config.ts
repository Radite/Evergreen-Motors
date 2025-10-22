import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  // Ensure public folder (including _redirects) is copied to dist
  publicDir: 'public',
  build: {
    outDir: 'dist',
    copyPublicDir: true
  }
});