/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#667eea',
        accent: '#f093fb',
        secondary: '#4facfe',
        tertiary: '#43e97b',
        background: '#0a0a0f',
        surface: '#1a1a2e',
        'surface-light': '#16213e',
        'text-primary': '#ffffff',
        'text-secondary': '#e2e8f0',
        'text-muted': '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'gradient-flow': 'gradient-flow 4s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'text-shimmer': 'text-shimmer 3s ease-in-out infinite',
        'border-flow': 'border-flow 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'rotate': 'rotate 4s linear infinite',
        'bounce-loading': 'bounce-loading 1.6s ease-in-out infinite both',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '25%': { 
            transform: 'translateY(-10px) rotate(1deg)' 
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(0deg)' 
          },
          '75%': { 
            transform: 'translateY(-10px) rotate(-1deg)' 
          },
        },
        'gradient-flow': {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
        },
        'gradient-shift': {
          '0%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
          '100%': {
            'background-position': '0% 50%'
          },
        },
        'text-shimmer': {
          '0%': {
            'background-position': '-200% 0'
          },
          '100%': {
            'background-position': '200% 0'
          },
        },
        'border-flow': {
          '0%, 100%': { 
            'background-position': '0% 50%' 
          },
          '50%': { 
            'background-position': '100% 50%' 
          },
        },
        'pulse-glow': {
          '0%, 100%': { 
            'box-shadow': '0 0 20px rgba(102, 126, 234, 0.4)',
            'transform': 'scale(1)'
          },
          '50%': { 
            'box-shadow': '0 0 40px rgba(240, 147, 251, 0.6)',
            'transform': 'scale(1.05)'
          },
        },
        'bounce-loading': {
          '0%, 80%, 100%': {
            'transform': 'scale(0) rotate(0deg)'
          },
          '40%': {
            'transform': 'scale(1) rotate(180deg)'
          },
        },
        rotate: {
          'from': {
            'transform': 'rotate(0deg)'
          },
          'to': {
            'transform': 'rotate(360deg)'
          },
        },
        slideUp: {
          '0%': { 
            'transform': 'translateY(50px) scale(0.9)', 
            'opacity': '0' 
          },
          '100%': { 
            'transform': 'translateY(0) scale(1)', 
            'opacity': '1' 
          },
        },
        fadeIn: {
          '0%': { 
            'opacity': '0', 
            'transform': 'scale(0.95)'
          },
          '100%': { 
            'opacity': '1', 
            'transform': 'scale(1)'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'hero-gradient': 'radial-gradient(circle at 30% 20%, rgba(102, 126, 234, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(240, 147, 251, 0.2) 0%, transparent 50%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      boxShadow: {
        'glow': '0 0 50px rgba(102, 126, 234, 0.4)',
        'glow-lg': '0 0 80px rgba(102, 126, 234, 0.6)',
        'inner-glow': 'inset 0 0 50px rgba(102, 126, 234, 0.1)',
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}