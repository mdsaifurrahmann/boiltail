const mix = require('laravel-mix');

mix
	.setPublicPath('public')
	.sass('resources/sass/app.scss', 'css/app.css')
	.sass('resources/sass/tailwind.scss', 'css/tailwind.min.css')
	.js('resources/js/app.js', 'js/app.js')
	.options({
		processCssUrls: true,
		postCss: [
			require('tailwindcss'),
		]
	})
	.version()

mix.webpackConfig({
	stats: {
		children: true,
	},
});