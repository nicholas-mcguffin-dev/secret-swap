import { defineConfig } from 'vite';
import browserslistToEsBuild from "browserslist-to-esbuild";
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: browserslistToEsBuild(),
  },
  plugins: [react()],
})
