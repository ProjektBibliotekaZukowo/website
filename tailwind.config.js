// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

const colors = {
  transparent: 'transparent',
  accent0: {
    1000: '#000',
    0: '#fff',
  },
  accent1: {
    50: '#F9FAFB',
    200: '#E5E7EB',
    400: '#9CA3AF',
    700: '#374151',
    900: '#111827',
  },
  accent2: {
    50: '#FEF2F2',
    200: '#FECACA',
    400: '#F87171',
    700: '#B91C1C',
    900: '#7F1D1D',
  },
  accent3: {
    50: '#F0F9FF',
    200: '#BAE6FD',
    400: '#38BDF8',
    700: '#0369A1',
    900: '#0C4A6E',
  },
};

const baseUnit = 16; // 16px = 1rem
const pxtorem = (px) => `${px / baseUnit}rem`;

const uiWidths = {
  0: '0px',
  full: '100%',
  site: pxtorem(1360),
  siteMin: pxtorem(1200),
  xl: pxtorem(1024),
  l: pxtorem(920),
  m: pxtorem(660),
  s: pxtorem(400),
  input: pxtorem(240),
  logo: pxtorem(200),
  survey: pxtorem(720),
  'input-medium': pxtorem(200),
  'input-large': pxtorem(320),
  'modal-alert': pxtorem(320),
  'modal-full': pxtorem(800),
  'modal-s': pxtorem(360),
  'modal-m': pxtorem(520),
};

const spacing = [
  0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 26, 32, 36, 38, 40, 48, 56, 64, 72, 80, 96, 112,
  128, 160, 256, 290, 320, 360,
].reduce((spaces, space) => ({ ...spaces, [space]: pxtorem(space) }), {});
spacing['full'] = '100%';
spacing['px'] = '1px';

const fontsize = [8, 10, 11, 12, 13, 14, 16, 20, 24, 32, 40, 72].reduce(
  (fontsizes, fontsize) => ({ ...fontsizes, [fontsize]: pxtorem(fontsize) }),
  {}
);
fontsize['px'] = '1px';

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      min: '1360px',
      'touch-device': {
        raw: '(hover: none), (pointer: coarse)', //https://www.w3.org/TR/mediaqueries-4/#mf-interaction
      },
      mobile: {
        raw: '(max-width: 375px)',
      },
      'landscape-mobile': {
        raw: '(max-height: 375px)',
      },
    },
    maxWidth: { ...spacing, ...uiWidths, screen: '100vw' },
    minWidth: { ...spacing, ...uiWidths, screen: '100vw' },
    minHeight: { ...spacing, screen: '100vh' },
    maxHeight: { ...spacing, screen: '100vh', modal: 'calc(100vh - 2rem)' },
    colors: colors,
    fontFamily: {
      sans: ['Source Sans Pro', 'Helvetica Neue', 'Arial', 'sans-serif'],
      mono: ['Monaco', 'Source Code Pro', 'Courier', 'mono'],
    },
    spacing: spacing,
    borderRadius: {
      none: '0rem',
      full: '9999px',
      0.5: '0.125rem',
      1: '0.25rem', // 4px
      2: '0.5rem', // 8px
      3: '0.75rem', // 12px
      4: '1rem', // 16px
    },
    boxShadow: {
      none: 'none',
      line: '0px 1px 0px rgba(39, 39, 39, 0.12)',
      element: '0px 1px 2px rgba(39, 39, 39, 0.12)',
      tooltip: '0px 2px 4px rgba(39, 39, 39, 0.12)',
      tooltipUp: '0px -2px 4px rgba(39, 39, 39, 0.12)',
      hover: '0px 2px 4px rgba(39, 39, 39, 0.08)',
      float: '0px 2px 16px rgba(39, 39, 39, 0.16)',
      blue: '0px 1px 4px rgba(52, 91, 255, 0.19);',
      notification: '0px 8px 8px rgba(39, 39, 39, 0.08)',
      highlight: '0 0 0 2px inset #E5EAFF',
      glow: '0px 0px 0px 1px #A4B4F5, 0px 0px 4px 1px #A4B4F5',
    },
    fontSize: fontsize,
    letterSpacing: {
      DEFAULT: '0.1px',
      1: '0.1px',
      2: '0.2px',
      3: '0.3px',
      6: '0.6px',
    },
    lineHeight: {
      1: '1em',
      1.1: '1.1em',
      1.2: '1.2em',
      1.25: '1.25em',
      DEFAULT: '1.25em',
      1.4: '1.4em',
      1.5: '1.5em',
      16: '1rem',
      20: '1.25rem',
      32: '2rem',
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
      bold: '600',
      DEFAULT: 'normal',
    },
    gridTemplateColumns: {
      ...defaultTheme.gridTemplateColumns,
      otherDetections: 'max-content auto max-content',
      fileList: 'max-content auto max-content',
      sidebarDetail: '22rem auto',
      sidebarSettings: '13.75rem auto',
      'fill-32': 'repeat(auto-fill, 2rem)',
      'fill-56': 'repeat(auto-fill, 3.5rem)',
      'fill-320': 'repeat(auto-fill, 20rem)',
      '2-auto': 'max-content max-content',
      'table-9': 'repeat(9, auto)',
      'table-7': 'repeat(7, auto)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
