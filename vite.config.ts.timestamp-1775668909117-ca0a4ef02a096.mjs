// vite.config.ts
import { defineConfig } from "file:///C:/Users/Natan/Desktop/Dino%20Genio%20Lovable/drrex-teste/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Natan/Desktop/Dino%20Genio%20Lovable/drrex-teste/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/Users/Natan/Desktop/Dino%20Genio%20Lovable/drrex-teste/node_modules/lovable-tagger/dist/index.js";
import { exec } from "child_process";
var __vite_injected_original_dirname = "C:\\Users\\Natan\\Desktop\\Dino Genio Lovable\\drrex-teste";
var dualLaunchPlugin = () => ({
  name: "dual-launch",
  configureServer(server) {
    server.httpServer?.once("listening", () => {
      setTimeout(() => {
        const cmd = process.platform === "win32" ? "start" : process.platform === "darwin" ? "open" : "xdg-open";
        exec(`${cmd} http://localhost:5173`);
        exec(`${cmd} http://localhost:5173/admin/login`);
      }, 1500);
    });
  }
});
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 5173,
    hmr: {
      overlay: false
    }
  },
  plugins: [
    react(),
    dualLaunchPlugin(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxOYXRhblxcXFxEZXNrdG9wXFxcXERpbm8gR2VuaW8gTG92YWJsZVxcXFxkcnJleC10ZXN0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmF0YW5cXFxcRGVza3RvcFxcXFxEaW5vIEdlbmlvIExvdmFibGVcXFxcZHJyZXgtdGVzdGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL05hdGFuL0Rlc2t0b3AvRGlubyUyMEdlbmlvJTIwTG92YWJsZS9kcnJleC10ZXN0ZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGNvbXBvbmVudFRhZ2dlciB9IGZyb20gXCJsb3ZhYmxlLXRhZ2dlclwiO1xyXG5pbXBvcnQgeyBleGVjIH0gZnJvbSBcImNoaWxkX3Byb2Nlc3NcIjtcclxuXHJcbmNvbnN0IGR1YWxMYXVuY2hQbHVnaW4gPSAoKSA9PiAoe1xyXG4gIG5hbWU6ICdkdWFsLWxhdW5jaCcsXHJcbiAgY29uZmlndXJlU2VydmVyKHNlcnZlcikge1xyXG4gICAgc2VydmVyLmh0dHBTZXJ2ZXI/Lm9uY2UoJ2xpc3RlbmluZycsICgpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY21kID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJyA/ICdzdGFydCcgOiBwcm9jZXNzLnBsYXRmb3JtID09PSAnZGFyd2luJyA/ICdvcGVuJyA6ICd4ZGctb3Blbic7XHJcbiAgICAgICAgZXhlYyhgJHtjbWR9IGh0dHA6Ly9sb2NhbGhvc3Q6NTE3M2ApO1xyXG4gICAgICAgIGV4ZWMoYCR7Y21kfSBodHRwOi8vbG9jYWxob3N0OjUxNzMvYWRtaW4vbG9naW5gKTtcclxuICAgICAgfSwgMTUwMCk7IC8vIEFndWFyZGEgbyBzZXJ2aWRvciBlc3RhYmlsaXphclxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiBcIjo6XCIsXHJcbiAgICBwb3J0OiA1MTczLFxyXG4gICAgaG1yOiB7XHJcbiAgICAgIG92ZXJsYXk6IGZhbHNlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBkdWFsTGF1bmNoUGx1Z2luKCksXHJcbiAgICBtb2RlID09PSAnZGV2ZWxvcG1lbnQnICYmIGNvbXBvbmVudFRhZ2dlcigpLFxyXG4gIF0uZmlsdGVyKEJvb2xlYW4pLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlXLFNBQVMsb0JBQW9CO0FBQzlYLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyxZQUFZO0FBSnJCLElBQU0sbUNBQW1DO0FBTXpDLElBQU0sbUJBQW1CLE9BQU87QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFDTixnQkFBZ0IsUUFBUTtBQUN0QixXQUFPLFlBQVksS0FBSyxhQUFhLE1BQU07QUFDekMsaUJBQVcsTUFBTTtBQUNmLGNBQU0sTUFBTSxRQUFRLGFBQWEsVUFBVSxVQUFVLFFBQVEsYUFBYSxXQUFXLFNBQVM7QUFDOUYsYUFBSyxHQUFHLEdBQUcsd0JBQXdCO0FBQ25DLGFBQUssR0FBRyxHQUFHLG9DQUFvQztBQUFBLE1BQ2pELEdBQUcsSUFBSTtBQUFBLElBQ1QsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQUdBLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUEsRUFDekMsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixpQkFBaUI7QUFBQSxJQUNqQixTQUFTLGlCQUFpQixnQkFBZ0I7QUFBQSxFQUM1QyxFQUFFLE9BQU8sT0FBTztBQUFBLEVBQ2hCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
