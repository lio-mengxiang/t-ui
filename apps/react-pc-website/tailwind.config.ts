import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      borderRadius: {
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
      },
      borderColor: () => ({
        color: 'var(--border-color)',
        'color-50': 'var(--border-color-50)',
        'color-100': 'var(--border-color-100)',
        'color-200': 'var(--border-color-200)',
        'color-800': 'var(--border-color-800)',
      }),
      textColor: () => ({
        color: 'var(--text-color)',

        'color-50': 'var(--text-color-50)',
        'color-100': 'var(--text-color-100)',
        'color-200': 'var(--text-color-200)',
        'color-300': 'var(--text-color-300)',
        'color-400': 'var(--text-color-400)',
        'color-500': 'var(--text-color-500)',
        'color-600': 'var(--text-color-600)',
        'color-700': 'var(--text-color-700)',
        'color-800': 'var(--text-color-800)',
        'color-900': 'var(--text-color-900)',

        'color-reverse': 'var(--text-color-reverse)',
      }),

      backgroundColor: () => ({
        color: 'var(--bg-color)',

        'color-50': 'var(--bg-color-50)',
        'color-100': 'var(--bg-color-100)',
        'color-200': 'var(--bg-color-200)',
        'color-300': 'var(--bg-color-300)',
        'color-400': 'var(--bg-color-400)',
        'color-500': 'var(--bg-color-500)',
        'color-600': 'var(--bg-color-600)',
        'color-700': 'var(--bg-color-700)',
        'color-800': 'var(--bg-color-800)',
        'color-900': 'var(--bg-color-900)',

        'color-reverse': 'var(--bg-color-reverse)',
      }),
      zIndex: {
        affix: 'var(--z-index-affix)',
        popup: 'var(--z-index-popup)',
        drawer: 'var(--z-index-drawer)',
        modal: 'var(--z-index-modal)',
        tooltip: 'var(--z-index-tooltip)',
        message: 'var(--z-index-message)',
        notification: 'var(--z-index-notification)',
        'image-preview': 'var(--z-index-image-preview)',
      },
      colors: () => ({
        primary: {
          color: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          focus: 'var(--color-primary-focus)',
          active: 'var(--color-primary-active)',
          disabled: 'var(--color-primary-disabled)',
        },
        warning: {
          color: 'var(--color-warning)',
          hover: 'var(--color-warning-hover)',
          focus: 'var(--color-warning-focus)',
          active: 'var(--color-warning-active)',
          disabled: 'var(--color-warning-disabled)',
        },
        error: {
          color: 'var(--color-error)',
          hover: 'var(--color-error-hover)',
          focus: 'var(--color-error-focus)',
          active: 'var(--color-error-active)',
          disabled: 'var(--color-error-disabled)',
        },
        success: {
          color: 'var(--color-success)',
          hover: 'var(--color-success-hover)',
          focus: 'var(--color-success-focus)',
          active: 'var(--color-success-active)',
          disabled: 'var(--color-success-disabled)',
        },
      }),
    },
  },
  plugins: [],
} satisfies Config;
