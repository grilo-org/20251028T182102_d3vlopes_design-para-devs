import type { Meta, StoryObj } from '@storybook/react';

import { thumbnailMock } from './Thumbnail.mock';

import { Thumbnail } from '.';

const meta: Meta<typeof Thumbnail> = {
	title: 'Molecules/Thumbnail',
	component: Thumbnail,
	args: {
		...thumbnailMock,
	},
	argTypes: {
		onClickPlayButton: { action: 'clicked' },
	},
};

export default meta;
type Story = StoryObj<typeof Thumbnail>;

const template: Story = {
	render: (args) => (
		<div className="max-w-[1120px] m-auto">
			<Thumbnail {...args} />
		</div>
	),
};

export const Default: Story = {
	...template,
};
