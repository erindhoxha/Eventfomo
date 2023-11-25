import type { Preview } from '@storybook/react';
import '../app/globals.css';
import React from 'react';

const preview: Preview = {
 parameters: {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disabled: true },
  controls: {
   matchers: {
    color: /(background|color)$/i,
    date: /Date$/i,
   },
  },
 },
};

export const globalTypes = {
 locale: {
  name: 'Locale',
  description: 'Locale',
  defaultValue: 'en',
 },
 colorMode: {
  name: 'Color Mode',
  description: 'Color Mode',
  toolbar: {
   icon: 'paintbrush',
   items: [
    { value: 'light', title: 'Light' },
    { value: 'dark', title: 'Dark' },
   ],
   showName: true,
  },
 },
};

const withTheme = (Story, context) => {
 const globals = context.globals;
 const selectedTheme = globals.colorMode;
 const themeClass = selectedTheme;
 document.documentElement.className = themeClass;
 document.body.className = themeClass + ' bg-gradient-to-r bg-hero-pattern';
 return <Story {...context} />;
};

export const decorators = [withTheme];

export default preview;
