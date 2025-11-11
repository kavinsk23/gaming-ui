/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rarity Colors
        common: '#D9D9D9',
        uncommon: '#C5FFB3',
        rare: '#1A98FF',
        legendary: '#B561FF',
        epic: '#FFB12A',
        mythic: '#A2FFFD',
        primal: '#F9393C',
        
        // Additional Gaming Colors
        gray: {
          100: '#B8B8B8',
          200: '#D9D9D9',
        },
        white: '#FFFFFF',
        green: {
          400: '#89C53A',
          500: '#64D864',
        },
        red: {
          400: '#AA4949',
          500: '#DA4040',
          600: '#F9393C',
          700: '#FF0000',
        },
        blue: {
          600: '#1669AD',
          400: '#1A98FF',
        },
        purple: {
          400: '#D06CFF',
          500: '#B561FF',
        },
        orange: {
          400: '#FF8429',
          500: '#FFB12A',
        },
        cyan: {
          300: '#90F4E8',
          400: '#A2FFFD',
        }
      },
      // Optional: Add custom gradients for rarity effects
      backgroundImage: {
        'common-gradient': 'linear-gradient(135deg, #D9D9D9 0%, #B8B8B8 100%)',
        'uncommon-gradient': 'linear-gradient(135deg, #C5FFB3 0%, #89C53A 100%)',
        'rare-gradient': 'linear-gradient(135deg, #1A98FF 0%, #1669AD 100%)',
        'epic-gradient': 'linear-gradient(135deg, #FFB12A 0%, #FF8429 100%)',
        'legendary-gradient': 'linear-gradient(135deg, #B561FF 0%, #D06CFF 100%)',
        'mythic-gradient': 'linear-gradient(135deg, #A2FFFD 0%, #90F4E8 100%)',
        'primal-gradient': 'linear-gradient(135deg, #F9393C 0%, #FF0000 100%)',
      },
      // Optional: Add glow effects for higher rarities
      boxShadow: {
        'common-glow': '0 0 5px #D9D9D9',
        'uncommon-glow': '0 0 8px #C5FFB3',
        'rare-glow': '0 0 12px #1A98FF',
        'epic-glow': '0 0 16px #FFB12A',
        'legendary-glow': '0 0 20px #B561FF',
        'mythic-glow': '0 0 24px #A2FFFD',
        'primal-glow': '0 0 28px #F9393C',
      },
      // Optional: Add text glow for rarity text
      textShadow: {
        'common': '0 0 2px #D9D9D9',
        'uncommon': '0 0 4px #C5FFB3',
        'rare': '0 0 6px #1A98FF',
        'epic': '0 0 8px #FFB12A',
        'legendary': '0 0 10px #B561FF',
        'mythic': '0 0 12px #A2FFFD',
        'primal': '0 0 14px #F9393C',
      }
    },
  },
  plugins: [
    // Optional: If you want to use text-shadow utilities
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-common': {
          'text-shadow': '0 0 2px #D9D9D9'
        },
        '.text-shadow-uncommon': {
          'text-shadow': '0 0 4px #C5FFB3'
        },
        '.text-shadow-rare': {
          'text-shadow': '0 0 6px #1A98FF'
        },
        '.text-shadow-epic': {
          'text-shadow': '0 0 8px #FFB12A'
        },
        '.text-shadow-legendary': {
          'text-shadow': '0 0 10px #B561FF'
        },
        '.text-shadow-mythic': {
          'text-shadow': '0 0 12px #A2FFFD'
        },
        '.text-shadow-primal': {
          'text-shadow': '0 0 14px #F9393C'
        },
      })
    }
  ],
}