// Card.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';
import { Box } from '../Box/Box';

const meta: Meta<typeof Card> = {
 component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
 name: 'Card',
 render: () => (
  <Box margin={4}>
   <Card
    title="Card title"
    description="Card description"
    subtitle="Card subtitle"
   />
  </Box>
 ),
};
