export default {
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulseY: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(10%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 1.25s ease-out',
        pulseY: 'pulseY 1.25s ease-in-out infinite',
      },
    },
  },
}