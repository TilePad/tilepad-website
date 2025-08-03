// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TilePad',
			social: [
				{ icon: 'github', label: "Github", href: 'https://github.com/tilepad' }
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', slug: 'guides/getting-started' },
					],
				},
				{
					label: 'Plugins',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', slug: 'plugins/getting-started' },
						{ label: 'Manifest Format', slug: 'plugins/manifest' },
					],
				},
				{
					label: 'Icon Packs',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Manifest Format', slug: 'icon-packs/manifest' },
						{ label: 'Icons Format', slug: 'icon-packs/icons' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			components: {
				Hero: './src/components/Hero.astro'
			}
		}),
	],
});
