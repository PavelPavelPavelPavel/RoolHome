
/** @type {import('tailwindcss').Config} */
import { customColors, pulseKeyFrames, scrollKeyFrames } from './src/constants/tailwindConf';

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: customColors,
    extend: {
      animation: {
        pulse: "pulse 2.5s linear infinite",
        "infinite-scroll": "scroll 30s linear infinite",
        "infinite-scroll-last": "scroll 30s ease infinite",
      },
      keyframes: {
        pulse: pulseKeyFrames,
        scroll: scrollKeyFrames,
      }
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-duration': (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme('transitionDuration') }
      )
    },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    },
  ],
}

