/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {

      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "serif"],
        sans: ["var(--font-sans)", "Cabinet Grotesk", "sans-serif"],
        body: ["var(--font-body)", "DM Sans", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },

      fontSize: {
        hero: "var(--text-hero)",
        display: "var(--text-display)",
        heading: "var(--text-heading)",
        title: "var(--text-title)",
        body: "var(--text-body)",
        small: "var(--text-small)",
        label: "var(--text-label)",
      },

      colors: {
        bg: {
          base: "var(--color-bg-base)",
          card: "var(--color-bg-card)",
          elevated: "var(--color-bg-elevated)",
          subtle: "var(--color-bg-subtle)",
          footer: "var(--color-bg-footer)",
        },
        accent: {
          gold: "var(--color-accent-gold)",
          glow: "var(--color-accent-glow)",
          teal: "var(--color-accent-teal)",
          red: "var(--color-accent-red)",
        },
        tx: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          hover: "var(--color-border-hover)",
          gold: "var(--color-border-gold)",
        },
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },

      boxShadow: {
        card: "var(--shadow-card)",
        gold: "var(--shadow-gold)",
        glow: "var(--shadow-glow)",
      },

      letterSpacing: {
        hero: "-0.03em",
        tight: "-0.02em",
        label: "0.12em",
      },

      lineHeight: {
        hero: "1.05",
        body: "1.75",
      },
    },
  },
  plugins: [],
};

export default config;