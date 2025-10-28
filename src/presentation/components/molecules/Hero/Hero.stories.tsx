import type { Meta, StoryObj } from '@storybook/react';

import { heroMock } from './Hero.mock';

import { Hero } from '.';

const meta: Meta<typeof Hero> = {
	title: 'Molecules/Hero',
	component: Hero,
	args: heroMock,
	parameters: {
		layout: 'fullscreen',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p1r0o56xHSpG3YHnrNlO3P/LP-Design-para-Devs?type=design&node-id=115-521&mode=design&t=7YVjvjs0AXRkCS68-0',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Hero>;

const template: Story = {
	render: (args) => <Hero {...args} />,
};

export const Default: Story = {
	...template,
};
