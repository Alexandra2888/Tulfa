import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["lodash"],
      output: {
        globals: {
          lodash: "_",
        },
      },
    },
  },
  resolve: {
    alias: {
      lodash: "lodash-es", 
    },
  },
  optimizeDeps: {
    include: ["lodash-es"],
  },
});
