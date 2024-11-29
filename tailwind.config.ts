import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        strongPink: "#FF007F",    
        vibrantPink: "#FF1493",   
        deepPink: "#D5006D",      
        electricPink: "#FF33B3",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        36: "9rem",
        72: "18rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [forms, typography],
};

export default config;
