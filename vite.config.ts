import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { exec } from "child_process";

const dualLaunchPlugin = () => ({
  name: 'dual-launch',
  configureServer(server: any) {
    server.httpServer?.once('listening', () => {
      setTimeout(() => {
        const cmd = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
        exec(`${cmd} http://localhost:5173`);
        exec(`${cmd} http://localhost:5173/admin/login`);
      }, 1500);
    });
  }
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5173,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    dualLaunchPlugin(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": "/src",
    },
  },
}));
