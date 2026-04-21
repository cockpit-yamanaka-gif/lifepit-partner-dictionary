import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        lifepit: {
          blue: "#2c89f4",
          sky: "#d9ebff",
          cyan: "#12a9d6",
          navy: "#1b4b89",
          deep: "#0d2f63",
          midnight: "#071b3a",
          mist: "#eef6ff",
          ice: "#f8fbff",
          pearl: "#f8fbff",
          ink: "#0d1b2a",
          soft: "#f3f8ff"
        }
      },
      boxShadow: {
        panel: "0 18px 50px rgba(17, 53, 99, 0.14)",
        glow: "0 20px 60px rgba(44, 137, 244, 0.2)",
        luxury: "0 24px 70px rgba(7, 27, 58, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
