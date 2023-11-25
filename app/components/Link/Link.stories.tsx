import type { Meta, StoryObj } from '@storybook/react';
import Link from './Link';
import { Box } from '../Box/Box';

export default {
 component: Link,
} as Meta;

export const Story: StoryObj<typeof Link> = {
 name: 'Link',
 args: {
  variant: 'ghost',
  size: 'default',
  href: '#',
  children: "I'm a link",
 },
 argTypes: {
  variant: {
   options: ['ghost', 'primary', 'secondary'],
   control: { type: 'radio' },
  },
  size: {
   options: ['default', 'sm', 'lg'],
   control: { type: 'radio' },
  },
  children: {
   control: { type: 'text' },
  },
 },
 decorators: [
  (Story) => (
   <Box margin={4}>
    <Story />
   </Box>
  ),
 ],
};
