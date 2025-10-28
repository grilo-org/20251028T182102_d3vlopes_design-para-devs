import type { Meta, StoryObj } from '@storybook/react';

import { footerMock } from './Footer.mock';

import { Footer } from '.';

const meta: Meta<typeof Footer> = {
	title: 'Molecules/Footer',
	component: Footer,
	args: footerMock,
	parameters: {
		layout: 'fullscreen',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p1r0o56xHSpG3YHnrNlO3P/LP-Design-para-Devs?type=design&node-id=35-50&mode=design&t=Z5d8zymNiqpqaMmc-0',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Footer>;

const template: Story = {
	render: (args) => <Footer {...args} />,
};

export const Default: Story = {
	...template,
};

export const WithCustomClass: Story = {
	...template,
	args: {
		className: 'text-center',
	},
};
