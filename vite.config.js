import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Gaussians/',
  server: {
    port: 3000,
    open: false
  }
});
