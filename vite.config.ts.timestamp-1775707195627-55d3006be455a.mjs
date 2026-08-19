// vite.config.ts
import { defineConfig } from "file:///C:/Users/Natan/Desktop/Dino%20Genio%20Lovable/drrex-teste/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Natan/Desktop/Dino%20Genio%20Lovable/drrex-teste/node_modules/@vitejs/plugin-react-swc/index.js";
import { componentTagger } from "file:///C:/Users/Natan/Desktop/Dino%20Genio%20Lovable/drrex-teste/node_modules/lovable-tagger/dist/index.js";
import { exec } from "child_process";
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
      "@": "/src"
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxOYXRhblxcXFxEZXNrdG9wXFxcXERpbm8gR2VuaW8gTG92YWJsZVxcXFxkcnJleC10ZXN0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmF0YW5cXFxcRGVza3RvcFxcXFxEaW5vIEdlbmlvIExvdmFibGVcXFxcZHJyZXgtdGVzdGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL05hdGFuL0Rlc2t0b3AvRGlubyUyMEdlbmlvJTIwTG92YWJsZS9kcnJleC10ZXN0ZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGNvbXBvbmVudFRhZ2dlciB9IGZyb20gXCJsb3ZhYmxlLXRhZ2dlclwiO1xyXG5pbXBvcnQgeyBleGVjIH0gZnJvbSBcImNoaWxkX3Byb2Nlc3NcIjtcclxuXHJcbmNvbnN0IGR1YWxMYXVuY2hQbHVnaW4gPSAoKSA9PiAoe1xyXG4gIG5hbWU6ICdkdWFsLWxhdW5jaCcsXHJcbiAgY29uZmlndXJlU2VydmVyKHNlcnZlcikge1xyXG4gICAgc2VydmVyLmh0dHBTZXJ2ZXI/Lm9uY2UoJ2xpc3RlbmluZycsICgpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY21kID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJyA/ICdzdGFydCcgOiBwcm9jZXNzLnBsYXRmb3JtID09PSAnZGFyd2luJyA/ICdvcGVuJyA6ICd4ZGctb3Blbic7XHJcbiAgICAgICAgZXhlYyhgJHtjbWR9IGh0dHA6Ly9sb2NhbGhvc3Q6NTE3M2ApO1xyXG4gICAgICAgIGV4ZWMoYCR7Y21kfSBodHRwOi8vbG9jYWxob3N0OjUxNzMvYWRtaW4vbG9naW5gKTtcclxuICAgICAgfSwgMTUwMCk7IC8vIEFndWFyZGEgbyBzZXJ2aWRvciBlc3RhYmlsaXphclxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiBcIjo6XCIsXHJcbiAgICBwb3J0OiA1MTczLFxyXG4gICAgaG1yOiB7XHJcbiAgICAgIG92ZXJsYXk6IGZhbHNlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBkdWFsTGF1bmNoUGx1Z2luKCksXHJcbiAgICBtb2RlID09PSAnZGV2ZWxvcG1lbnQnICYmIGNvbXBvbmVudFRhZ2dlcigpLFxyXG4gIF0uZmlsdGVyKEJvb2xlYW4pLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBcIi9zcmNcIixcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlXLFNBQVMsb0JBQW9CO0FBQzlYLE9BQU8sV0FBVztBQUVsQixTQUFTLHVCQUF1QjtBQUNoQyxTQUFTLFlBQVk7QUFFckIsSUFBTSxtQkFBbUIsT0FBTztBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUNOLGdCQUFnQixRQUFRO0FBQ3RCLFdBQU8sWUFBWSxLQUFLLGFBQWEsTUFBTTtBQUN6QyxpQkFBVyxNQUFNO0FBQ2YsY0FBTSxNQUFNLFFBQVEsYUFBYSxVQUFVLFVBQVUsUUFBUSxhQUFhLFdBQVcsU0FBUztBQUM5RixhQUFLLEdBQUcsR0FBRyx3QkFBd0I7QUFDbkMsYUFBSyxHQUFHLEdBQUcsb0NBQW9DO0FBQUEsTUFDakQsR0FBRyxJQUFJO0FBQUEsSUFDVCxDQUFDO0FBQUEsRUFDSDtBQUNGO0FBR0EsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE9BQU87QUFBQSxFQUN6QyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSCxTQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGlCQUFpQjtBQUFBLElBQ2pCLFNBQVMsaUJBQWlCLGdCQUFnQjtBQUFBLEVBQzVDLEVBQUUsT0FBTyxPQUFPO0FBQUEsRUFDaEIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
