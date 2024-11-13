import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Tulfa-Test/",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  build: {
    outDir: "dist",
  },
});
