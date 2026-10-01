/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        bg: '#050816',
        card: '#0F172A',
        primary: '#7C3AED',
        secondary: '#38BDF8',
        accent: '#A855F7',
        muted: '#94A3B8',
        'primary-light': '#9D5CF6',
        'secondary-light': '#7DD3FC',
        'card-border': '#1E293B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient':
          'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(124,58,237,0.3), transparent)',
        'purple-glow': 'radial-gradient(circle at center, rgba(124,58,237,0.4), transparent 70%)',
        'blue-glow': 'radial-gradient(circle at center, rgba(56,189,248,0.3), transparent 70%)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#7C3AED' },
        },
        'border-spin': {
          to: { '--angle': '360deg' },
        },
        ripple: {
          from: { transform: 'scale(0)', opacity: '0.5' },
          to: { transform: 'scale(4)', opacity: '0' },
        },
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(20px)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        scroll: 'scroll 1.5s ease-in-out infinite',
      },
      boxShadow: {
        'purple-glow': '0 0 30px rgba(124,58,237,0.4), 0 0 60px rgba(124,58,237,0.2)',
        'blue-glow': '0 0 30px rgba(56,189,248,0.3), 0 0 60px rgba(56,189,248,0.15)',
        'card-glow': '0 4px 30px rgba(124,58,237,0.15), 0 1px 0 rgba(255,255,255,0.05) inset',
        'neon': '0 0 5px rgba(124,58,237,0.8), 0 0 20px rgba(124,58,237,0.4)',
      },
    },
  },
  plugins: [],
};
