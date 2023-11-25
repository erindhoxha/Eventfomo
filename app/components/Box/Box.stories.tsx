import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

export default {
 component: Box,
} as Meta;

export const Story: StoryObj<typeof Box> = {
 name: 'Box',
 args: {
  children: "I'm a Box",
 },
};
