/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    rtl: true,
    themes: [
      {
        dracula: {
          ...require('daisyui/src/theming/themes')['dracula'],
          primary: '#ef4444',
          'primary-focus': '#dc2626'
        }
      }
    ]
  }
}
