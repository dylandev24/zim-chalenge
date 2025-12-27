import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-framer": ["framer-motion"],
          "vendor-swiper": ["swiper"],
          "vendor-react": ["react", "react-dom"],
        },
      },
    },
    minify: "terser",
  },
});
