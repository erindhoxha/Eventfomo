// Box.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';

const meta: Meta<typeof Box> = {
 component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
 name: 'Box',
 render: () => <Box>Hello i am a box</Box>,
};
