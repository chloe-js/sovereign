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
        'svn-primary': '#00594c',
        'svn-secondary': '#018476',
        'svn-danger': '#f7403a',
        'svn-warning': '#ffd800',
        'svn-success': '#93c90e',
        'svn-info': '#11becf',
        'svn-default': '#f6f6f6',
        'svn-base': '#333333',
        'svn-text-primary': '#333333',
        'svn-text-danger': '#f7403a',
        'svn-text-warning': '#ffd800',
        'svn-text-success': '#93c90e',
        'svn-text-info': '#11becf',
        'svn-text-disabled': '#777777',
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
};
export default config;
