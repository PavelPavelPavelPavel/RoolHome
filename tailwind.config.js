
/** @type {import('tailwindcss').Config} */
import { customColors, pulseKeyFrames, scrollKeyFrames, pulseColor, pulseColorSecond } from './src/constants/tailwindConf';

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: customColors,
    extend: {
      animation: {
        pulse: "pulse 4s linear infinite",
        pulseBg: "pulseColor 2s linear",
        pulseBgSecond: "pulseColorSecond 2s linear",
      },
      keyframes: {
        pulse: pulseKeyFrames,
        scroll: scrollKeyFrames,
        pulseColor,
        pulseColorSecond,
      },
      screens: {
        'xs': '200px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
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

