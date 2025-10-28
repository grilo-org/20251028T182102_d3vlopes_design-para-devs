import type { Meta, StoryObj } from '@storybook/react';

import { avatarMock } from './Avatar.mock';

import { Avatar } from '.';

const meta: Meta<typeof Avatar> = {
	title: 'Molecules/Avatar',
	component: Avatar,
	args: avatarMock,
	parameters: {
		backgrounds: {
			default: 'background-400',
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p1r0o56xHSpG3YHnrNlO3P/LP-Design-para-Devs?type=design&node-id=143-197&mode=design&t=9iKG0T2HeUbm2x4P-0',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

const template: Story = {
	render: (args) => <Avatar {...args} />,
};

export const Default: Story = {
	...template,
};
