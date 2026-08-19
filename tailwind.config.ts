import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0D0D0D",
          dark: "#1A1917",
          marble: "#F6F2EB",
          stone: "#E6E2DA",
          gold: "#C8A561",
          walnut: "#C8A47A",
          oak: "#E1C79B",
          white: "#FFFFFF",
          muted: "#6B655D",
          border: "#E0D9CE",
          "dark-border": "#2D2A26",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(13, 13, 13, 0.05)",
        card: "0 10px 30px -5px rgba(13, 13, 13, 0.08)",
        floating: "0 20px 40px -10px rgba(13, 13, 13, 0.15)",
        dark: "0 15px 35px -5px rgba(0, 0, 0, 0.5)",
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
