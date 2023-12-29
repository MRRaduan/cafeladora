import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        cafeladora: {
          primary: "#457b9d",
          secondary: "#e63946",
          accent: "#a8dadc",
          neutral: "#1d3557",
          "base-100": "#fff",
          // "--rounded-box": "2rem",
          "--rounded-btn": "2rem",
        },
      },
      "light",
      "dark",
      "cupcake",
      "autumn",
      "luxury",
      "retro",
      "emerald",
      "cmyk",
      "garden",
      "pastel",
      "halloween",
      "black",
      "dracula",
    ],
  },
};
export default config;
