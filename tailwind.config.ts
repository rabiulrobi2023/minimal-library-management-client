import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary1: "#52a2cd",
        primary2: "#eda100",
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // make sure this is correct!
};

export default config;
