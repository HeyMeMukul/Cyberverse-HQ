/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          blue: '#00ffff',
          pink: '#ff00ff',
          green: '#00ff00',
          orange: '#ff8800',
          purple: '#8800ff',
          red: '#ff0040',
          yellow: '#ffff00',
          dark: '#0a0a0a',
          darker: '#050505',
          gray: '#1a1a1a',
          'blue-glow': '#00ccff',
          'pink-glow': '#ff0088',
          'green-glow': '#00cc88',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
        cyber: ['Orbitron', 'sans-serif'],
        matrix: ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 2s linear infinite',
        'flicker': 'flicker 0.15s infinite linear alternate',
        'data-stream': 'dataStream 20s linear infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'bounce-glow': 'bounceGlow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor' },
          '100%': { boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 }
        },
        dataStream: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        bounceGlow: {
          '0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)' },
          '50%': { transform: 'scale(1.05)', filter: 'brightness(1.2)' }
        }
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)',
        'matrix-rain': 'linear-gradient(180deg, transparent, rgba(0,255,0,0.1), transparent)',
      },
      backgroundSize: {
        'grid': '20px 20px',
      }
    },
  },
  plugins: [],
}
