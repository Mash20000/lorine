import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path: "/" by default (Vercel, localhost, ngrok).
// The GitHub Pages workflow sets BASE_PATH=/lorine/ for its own build.
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
  server: {
    allowedHosts: [".ngrok-free.dev"],
    // Makes hot reload work when the site is opened through ngrok (https).
    hmr: {
      protocol: "wss",
      clientPort: 443,
    },
  },
});
