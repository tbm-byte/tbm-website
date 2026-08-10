import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Design tokens — see CLAUDE.md "Design tokens" table.
        // Never hardcode a hex value in a component; use these names.
        blue: '#2563EB',
        'blue-deep': '#1E3A8A',
        charcoal: '#0F1115',
        'gray-light': '#F2F4F7',
        'gray-muted': '#687280',
        border: '#E5E7EB',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        content: '1120px', // page content max-width
        text: '720px', // text-block max-width
      },
      borderRadius: {
        btn: '8px',
        card: '12px',
      },
      spacing: {
        section: '120px', // section vertical padding, desktop
        'section-mobile': '72px', // section vertical padding, mobile
      },
    },
  },
  plugins: [],
};
