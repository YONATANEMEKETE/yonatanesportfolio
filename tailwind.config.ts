import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
      colors: {
        bg: 'hsl(var(--bg))',
        bglight: 'hsl(var(--bglight))',
        bglighter: 'hsl(var(--bglighter))',
        text: 'hsl(var(--text))',
        textlight: 'hsl(var(--textlight))',
        textlighter: 'hsl(var(--textlighter))',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
export default config;
