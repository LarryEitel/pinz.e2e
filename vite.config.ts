import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	  include: [
		'tests/**/*.{test,spec}.{js,ts}',
	  ],
	test: {
	  include: [
		'tests/**/*.{test,spec}.{js,ts}',
	  ],
	  setupFiles: ['tests/setup.ts'],
	},
});
