import type { Meta, StoryObj } from '@storybook/react';

import { videoThumbnailMock } from './VideoThumbnail.mock';

import { VideoThumbnail } from '.';

const meta: Meta<typeof VideoThumbnail> = {
	title: 'Organisms/VideoThumbnail',
	component: VideoThumbnail,
	args: videoThumbnailMock,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p1r0o56xHSpG3YHnrNlO3P/LP-Design-para-Devs?type=design&node-id=143-118&mode=design&t=4t5NiTbZSbqSDlzE-0',
		},
	},
};

export default meta;
type Story = StoryObj<typeof VideoThumbnail>;

const template: Story = {
	render: (args) => <VideoThumbnail {...args} />,
};

export const Default: Story = {
	...template,
};
