// tailwind.config.js
module.exports = {
  future: {},
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#F6D186',
          400: '#fff9c2',
          500: '#F6D186',
          600: '#ffed4a',
        },
        white: '#dfeceb',
        foam: {
          DEFAULT: '#cef3f2',
          50: '#fdfefe',
          100: '#fafefe',
          200: '#f3fcfc',
          300: '#ebfafa',
          400: '#ddf7f6',
          500: '#cef3f2',
          600: '#b9dbda',
          700: '#9bb6b6',
          800: '#7c9291',
          900: '#657777',
        },
        primary: {
          100: '#AFF2F5',
          200: '#90D8E2',
          300: '#71BECE',
          400: '#51A3BA',
          500: '#3289A7',
          600: '#1F7191',
          700: '#185B7A',
          800: '#114562',
          900: '#0A2E4A',
        },
        'slate-gray': '#628395',
        'dim-gray': `#706f6f`,
        'gun-metal': '#2D3142',
        'black-coral': '#227C9D',
      },
      height: {
        120: '30rem',
      },
    },
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
}
