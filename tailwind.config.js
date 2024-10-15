
/** @type {import('tailwindcss').Config} */
import { customColors, customKeyFrames } from './src/constants/tailwindConf';

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        pulse: "pulse 2.5s linear infinite"
      },
      keyframes: {
        pulse: customKeyFrames,
      }
    },
    colors: customColors,
  },
  plugins: [],
}

