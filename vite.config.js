import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { nodePolyfills } from 'vite-plugin-node-polyfills'

const vitestBrowserConditionPlugin = {
  name: 'vite-plugin-vitest-browser-condition',
  config({resolve}) {
    if(process.env.VITEST) {
      resolve.conditions.unshift('browser');
    }
  }
}

export default defineConfig({
  plugins: [
    nodePolyfills({
      include: ['path', 'fs'],
    }),
    vitestBrowserConditionPlugin, sveltekit()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/**/*.{test,spec}.{js,ts}'],
    // extend jsdom matchers
    setupFiles: ['./tests/_setup.js']
  }
});
