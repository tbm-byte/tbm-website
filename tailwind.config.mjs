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
        // Not in the CLAUDE.md token table. Plain `blue` (3.65:1) and
        // `gray-muted` (3.88:1) both fail AA against `charcoal` — these are
        // the lightened equivalents the design export uses, only inside the
        // one dark (Guarantee) section, so that section can pass 4.5:1.
        'blue-light': '#7CA3F7',
        'charcoal-muted': '#9AA2AE',
        'charcoal-body': '#E8EAEE',
        'charcoal-border': '#23262D',
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
