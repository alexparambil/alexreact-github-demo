// vitest.config.ts or vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
  },
});
