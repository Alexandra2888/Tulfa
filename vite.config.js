import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      lodash: "lodash-es",
    },
  },
  build: {
    rollupOptions: {
      external: ["lodash-es"],
      output: {
        globals: {
          "lodash-es": "_", 
        },
      },
    },
  },
  optimizeDeps: {
    include: ["lodash-es"],
  },
});
