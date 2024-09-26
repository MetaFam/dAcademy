/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        light: {

          "primary": "#00afaa",
          "secondary": "#9391E1",
          "accent": "#000",
          "neutral": "#292929",
          "neutral-content": "#17B59B",
          "base-100": "#e5ffff",
          "info": "#00a4e0",
          "success": "#00bb96",
          "warning": "#ffb600",
          "error": "#ff6294",
        },
        
        dark: {

          "primary": "#d400ff",
          "secondary": "#6d6bcc",
          "accent": "#ffffff",
          "neutral": "#14110d",
          "neutral-content": "#5adec8",
          "base-100": "#1d282f",
          "info": "#35a0ff",
          "success": "#9be500",
          "warning": "#b14b00",
          "error": "#ff5f78",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    prefix: "",
    themeRoot: ":root",
  },
}