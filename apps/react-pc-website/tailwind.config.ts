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
        'color-400': 'var(--text-color-400)',
        'color-500': 'var(--text-color-500)',
      }),
      backgroundColor: () => ({
        color: 'var(--bg-color)',
        'color-50': 'var(--bg-color-50)',
        'color-100': 'var(--bg-color-100)',
        'color-200': 'var(--bg-color-200)',
        'color-800': 'var(--bg-color-800)',
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
          color: 'var(--tw-color-blue-600)',
          hover: 'var(--tw-color-blue-500)',
          focus: 'var(--tw-color-blue-200)',
          active: 'var(--tw-color-blue-700)',
          disabled: 'var(--tw-color-blue-300)',
        },
        warning: {
          color: 'var(--tw-color-orange-500)',
          hover: 'var(--tw-color-orange-400)',
          focus: 'var(--tw-color-orange-200)',
          active: 'var(--tw-color-orange-600)',
          disabled: 'var(--tw-color-orange-300)',
        },
        error: {
          color: 'var(--tw-color-red-600)',
          hover: 'var(--tw-color-red-500)',
          focus: 'var(--tw-color-red-200)',
          active: 'var(--tw-color-red-700)',
          disabled: 'var(--tw-color-red-300)',
        },
        success: {
          color: 'var(--tw-color-lime-500)',
          hover: 'var(--tw-color-lime-400)',
          focus: 'var(--tw-color-lime-200)',
          active: 'var(--tw-color-lime-600)',
          disabled: 'var(--tw-color-lime-300)',
        },
      }),
    },
  },
  plugins: [],
} satisfies Config;
