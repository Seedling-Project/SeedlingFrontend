import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "./index.html", // Ensure this points to the correct location
    },
  },
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
  },
});
