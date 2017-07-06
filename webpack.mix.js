let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync({
	host: 'localhost',
    port: 3000,
    proxy: 'emils.dev',
    files: [
        'resources/views/*.blade.php',
        'public/**/*.js',
        'public/**/*.css'
    ]
});

mix.js('resources/assets/scripts/app.js', 'public/js')
   .sass('resources/assets/styles/app.scss', 'public/css')
   .version()
   .setPublicPath('public');
