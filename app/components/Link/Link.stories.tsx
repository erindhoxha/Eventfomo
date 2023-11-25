import type { Meta, StoryObj } from '@storybook/react';
import Link from './Link';

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
};
