/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        abril: ["Abril Fatface", "serif"],
      },
      colors: {
        verde: "#C6D9A0",
        bege: "#E6D6C3",
        azul: "#B0BBE3",
        marrom: "#58331e",
        marromText: "#321c0f",
        tittle: "#292D1F",
        verdeHover: "#B1C091",
        marromHover: "#332922",
      },
      boxShadow: {
        "nav-scroll":
          "0 6px 12px -2px rgba(255,255,255,0.5), 0 4px 8px -2px rgba(255,255,255,0.3)",
        "nav-scroll-lg":
          "0 12px 24px -4px rgba(255,255,255,0.5), 0 8px 16px -4px rgba(255,255,255,0.3)",
      },
      backdropBlur: {
        xs: "4px",
        sm: "4px",
        md: "8px",
        lg: "8px",
      },
      animation: {
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "float-label": "floatLabel 0.2s ease-out forwards",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        floatLabel: {
          "0%": {
            top: "1rem",
            left: "1rem",
            fontSize: "1rem",
            color: "#6b7280",
          },
          "100%": {
            top: "-0.5rem",
            left: "0.8rem",
            fontSize: "0.75rem",
            color: "#FBBF24",
          },
        },
      },
    },
  },
  plugins: [],
};
