import type { Meta, StoryObj } from '@storybook/react';

import { Image } from '.';

const meta: Meta<typeof Image> = {
	title: 'Atoms/Image',
	component: Image,
	args: {
		src: 'https://placehold.co/320x320',
		alt: 'Loren ipsum dolor',
		width: 320,
		height: 320,
	},
};

export default meta;
type Story = StoryObj<typeof Image>;

const template: Story = {
	render: (args) => <Image {...args} />,
};

export const Default: Story = {
	...template,
};
