import { defineConfig } from 'vite';
import browserslistToEsBuild from "browserslist-to-esbuild";
import react from '@vitejs/plugin-react';
import postcss from "./postcss.config.js";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: browserslistToEsBuild(),
  },
  plugins: [react()],
  css: {
    postcss
  }
})
