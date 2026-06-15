import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from a custom domain (isavin.dev) → root base path.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
