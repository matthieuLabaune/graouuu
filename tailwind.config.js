module.exports = {
    content: [
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
        './resources/**/**/*.vue',
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    ],
    theme: {
        screens: {
            'md': '640px',
            'lg': '768px',
            'xl': '1024px',
        },
        extend: {},
    },
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer')
    ],
}
