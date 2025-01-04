import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import externalize from 'vite-plugin-externalize-dependencies'

const externals = [/^socket:*/]
export default defineConfig({
	plugins: [
		externalize({
			externals
		}),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		rollupOptions: {
			external: externals
		}
	}
});
