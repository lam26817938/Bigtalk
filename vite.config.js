import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 與 GitHub Pages 專案站路徑一致（package.json 的 homepage）
export default defineConfig({
  plugins: [react()],
  base: '/Bigtalk/',
});
