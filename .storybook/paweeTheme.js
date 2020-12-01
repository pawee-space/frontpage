import { create } from '@storybook/theming/create';
import logo from '../src/assets/logo.png';

export default create({
  base: '#dark',

  colorPrimary: '#663399',
  colorSecondary: '#663399',

  // UI
  appBg: '##ebebeb',
  appContentBg: '#ebebeb',
  appBorderColor: '#444444',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#121212',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#ffffff',
  barBg: '#663399',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Pawee Space',
  brandUrl: 'https://pawee.space',
  brandImage: logo,
});
