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
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        buttonColor: "var(--button-color)",
        borderColor: "var(--border-color)",
        white: "var(--white)",
        black: "var(--black)",
        textSecondary: "var(--secondary-text)",

        tripStatus: "var(--trip-status)",
        tripStatusText: "var(--trip-status-text)",
        delayed: "var(--delayed)",
        delayedText: "var(--delayed-text)",
        onTime: "var(--on-time)",
        onTimeText: "var(--on-time-text)",
        progress: "var(--progress)",
        otherStatus: "var(--other-status)",
        otherStatusText: "var(--other-status-text)",
      },
    },
    fontSize: {
      "fs-12": "var(--fs-12)",
      "fs-14": "var(--fs-14)",
      "fs-16": "var(--fs-16)",
      "fs-24": "var(--fs-24)",
    },
  },
  plugins: [],
};
export default config;
