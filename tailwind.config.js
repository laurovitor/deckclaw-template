/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', ':root[data-theme="dark"]'],
  content: [
    './*.html',
    './assets/scripts/**/*.js',
    './assets/styles/tw.css'
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-soft': 'var(--surface-soft)',
        'surface-hover': 'var(--surface-hover)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        border: 'var(--border)',
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        success: 'var(--success)',
        warn: 'var(--warn)',
        danger: 'var(--danger)',
        info: 'var(--info)'
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '16px'
      },
      boxShadow: {
        card: '0 8px 20px rgba(15, 23, 42, 0.08)',
        soft: '0 1px 2px rgba(15, 23, 42, 0.08)'
      },
      spacing: {
        18: '4.5rem'
      }
    }
  },
  plugins: []
}
