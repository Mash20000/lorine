import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
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
