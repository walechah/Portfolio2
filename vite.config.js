import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  base : "/Portfolio2/",
  plugins: [
    react(),
    tailwindcss(),
  ],
});