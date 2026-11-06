import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 使用相对路径，静态部署到 GitHub Pages 或任意目录都能直接访问
export default defineConfig({
  base: "./",
  plugins: [vue()],
});
