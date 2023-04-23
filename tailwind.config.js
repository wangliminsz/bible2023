module.exports = {
    purge: {
        content: [
            `components/**/*.{vue,js}`,
            `layouts/**/*.vue`,
            `pages/**/*.vue`,
            `plugins/**/*.{js,ts}`,
            `nuxt.config.{js,ts}`
        ]
    },
    darkMode: false, // or 'media' or 'class'

    theme: {

        extend: {
            fontFamily: {
                Comfortaa: ['Comfortaa'],
                Tcfont: ['Noto Serif TC'],
                Cinzel: ['Cinzel'],
                Sarabun: ['Sarabun'],
            },
        },
    },

    variants: {
        extend: {},
    },
    plugins: [],
}