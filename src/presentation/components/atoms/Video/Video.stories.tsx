import type { Meta, StoryObj } from '@storybook/react';

import { videoMock } from './Video.mock';

import { Video } from '.';

const meta: Meta<typeof Video> = {
	title: 'Atoms/Video',
	component: Video,
	args: videoMock,
};

export default meta;
type Story = StoryObj<typeof Video>;

const template: Story = {
	render: (args) => (
		<div className="max-w-[1254.86px] flex justify-center">
			<Video {...args} />
		</div>
	),
};

export const Default: Story = {
	...template,
};

export const WithCustomClass: Story = {
	...template,
	args: {
		className: 'w-[720px]',
	},
};
