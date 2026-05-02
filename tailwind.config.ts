import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F0F0F0",
        ink: "#0A0A0A",
        muted: "#7C7C7C",
        line: "#E4E4E4",
        cardline: "#EAEAEA",
        ash: "#989898",
        chip: "#FFFFFF",
        dark: "#0A0A0A",
        darker: "#000000",
        elev: "#1C1C1C",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
      },
      letterSpacing: {
        display: "-0.07em",
        tight2: "-0.04em",
      },
      boxShadow: {
        card: "0 1px 0 rgba(0,0,0,0.04), 0 8px 24px -12px rgba(0,0,0,0.08)",
        chip: "0 1px 2px rgba(0,0,0,0.06), 0 4px 12px -4px rgba(0,0,0,0.08)",
        soft: "0 24px 60px -20px rgba(0,0,0,0.18)",
      },
      animation: {
        "marquee": "marquee 32s linear infinite",
        "marquee-rev": "marquee-rev 36s linear infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both",
        "blob": "blob 14s ease-in-out infinite",
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        "marquee-rev": { "0%": { transform: "translateX(-50%)" }, "100%": { transform: "translateX(0)" } },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) rotate(0deg) scale(1)" },
          "33%": { transform: "translate(20px,-30px) rotate(8deg) scale(1.05)" },
          "66%": { transform: "translate(-15px,20px) rotate(-6deg) scale(0.97)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
