import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Fondos cálidos, nunca blanco puro ni dark mode
        cream: "#FDFBF7",
        cream2: "#F6F2EA",
        ink: "#2E2A26",
        ink2: "#6B6560",
        ink3: "#948E86",

        // Acento verde salvia (elegido del brief)
        salvia: {
          DEFAULT: "#7BA687",
          light: "#95BC9F",
          dark: "#5B8B6A",
          soft: "#E4EFE7",
        },
        // Secundario melocotón
        peach: {
          DEFAULT: "#F4B393",
          soft: "#FBE4D5",
        },
        // Estados
        warm: "#E29E7A",
        alert: "#C97C5D",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "12px",
        lg: "16px",
        xl: "20px",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(46,42,38,0.06)",
        card: "0 2px 12px rgba(46,42,38,0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
