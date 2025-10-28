import type { Meta, StoryObj } from '@storybook/react';

import { socialIconsMock } from './SocialIcons.mock';

import { SocialIcons } from '.';

const meta: Meta<typeof SocialIcons> = {
	title: 'Molecules/SocialIcons',
	component: SocialIcons,
	args: socialIconsMock,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p1r0o56xHSpG3YHnrNlO3P/LP-Design-para-Devs?type=design&node-id=143-180&mode=design&t=9iKG0T2HeUbm2x4P-0',
		},
	},
};

export default meta;
type Story = StoryObj<typeof SocialIcons>;

const template: Story = {
	render: (args) => <SocialIcons {...args} />,
};

export const Default: Story = {
	...template,
};
