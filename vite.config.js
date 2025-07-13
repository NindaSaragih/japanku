import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // ← penting untuk alias

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // ← ini bikin @ jadi alias ke src/
    }
  }
});
