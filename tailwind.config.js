
/** @type {import('tailwindcss').Config} */
import { customColors, pulseKeyFrames, scrollKeyFrames, pulseColor, pulseKeyFramesDarkMode, pulseColorSecond } from './src/constants/tailwindConf';

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'zenKaku': ['ZenKaku', "sans-serif"],
    },
    colors: customColors,
    extend: {
      flex: {
        'app': '1 auto 1',
      },
      animation: {
        pulse: "pulse 5s linear infinite",
        pulseDark: "pulseDarkMode 5s linear infinite",
        pulseBg: "pulseColor 2s linear",
        pulseBgSecond: "pulseColorSecond 2s linear",
      },
      keyframes: {
        pulse: pulseKeyFrames,
        pulseDarkMode: pulseKeyFramesDarkMode,
        scroll: scrollKeyFrames,
        pulseColor,
        pulseColorSecond,
      },
      screens: {
        'xs': '200px',
        'xm': '350px',
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

