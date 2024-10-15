/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        pulse: "pulse 2.5s linear infinite"
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          }
        }
      }
    },
    colors: {
      'red': '#ff0103',
      'white': '#ffffff',
      'aquamarin': '#3feee6',
      'dark-aquamarin': '#55bcc9',
      'gray': '#97caef',
      'white-aquamarin': '#cafafe',
      'black': '#020009'
    },

  },
  plugins: [],
}

