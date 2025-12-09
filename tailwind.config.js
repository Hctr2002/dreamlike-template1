/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#111827', // gray-900
                primary: '#EAB308', // yellow-500
            },
            fontFamily: {
                sans: ['Roboto Condensed', 'sans-serif'],
                heading: ['Oswald', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
