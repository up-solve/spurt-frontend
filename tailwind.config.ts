import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1124px',
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      purple300: '#3A004F',
      purple200: '#9400D3',
      purple100: '#9747FF',
      blue300: '#330066',
      blue200: '#6C5EF1',
      blue100: '#0FADEF',
      brown300: '#2C0613',
      brown200: '#6A2346',
      brown100: '#760A3F',
      pink300: '#C82091',
      pink200: '#F7007A',
      green300: '#09BA1B',
      red300: '#FF0000',
      yellow300: '#FFBD37',
      bgPurple: '#F7E7FF',
      bgYellow: '#FFF1CD',
      bgWhite: '#FCF5FF',
    },
    fontSize: {
      xs: ['12px', { lineHeight: '20px', letterSpacing: '-0.03em' }],
      sm: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
      md: ['16px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      lg: ['20px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
      xl: ['24px', { lineHeight: '36px', letterSpacing: '-0.03em' }],
      '2xl': ['30px', { lineHeight: '48px', letterSpacing: '-0.032em' }],
      '3xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.032em' }],
      '4xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.032em' }],
      '5xl': ['64px', { lineHeight: '80px', letterSpacing: '-0.032em' }],
      xxl: ['106px', { lineHeight: '80px', letterSpacing: '-0.032em' }],
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
