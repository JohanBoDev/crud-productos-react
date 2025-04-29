import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom', // ✅ Esto es crucial para que expect funcione bien con Testing Library
    globals: true,         // ✅ Esto hace que Vitest registre globalmente `expect`, `describe`, `it`, etc.
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
