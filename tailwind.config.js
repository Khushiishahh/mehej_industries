/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:          '#F97316',
        'primary-dark':   '#EA580C',
        accent:           '#F97316',
        navy:             '#091525',
        'navy-mid':       '#0D1F3A',
        'navy-surface':   '#112240',
        'navy-card':      '#162A4A',
        'navy-border':    '#1E3A5F',
        dark:             '#091525',
        topbar:           '#060E1A',
        surface:          '#112240',
        border:           '#1E3A5F',
        muted:            '#94A3B8',
        muted2:           '#64748B',
        whatsapp:         '#22C55E',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft:   '0 2px 12px rgba(0,0,0,0.08)',
        card:   '0 4px 24px rgba(0,0,0,0.10)',
        glow:   '0 0 24px rgba(249,115,22,0.12)',
        orange: '0 2px 12px rgba(249,115,22,0.20)',
        navy:   '0 4px 24px rgba(6,14,26,0.30)',
      },
    },
  },
  plugins: [],
};
