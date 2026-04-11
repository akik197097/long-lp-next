import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        gold: "#C9A84C",
        offwhite: "#F5F0E8",
        muted: "#9A9080",
        surface: "#111111",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        noto: ["var(--font-noto)", "serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
    },
  },
  plugins: [],
};
export default config;
