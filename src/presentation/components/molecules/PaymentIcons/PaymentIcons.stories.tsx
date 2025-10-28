import type { Meta, StoryObj } from '@storybook/react';

import { paymentIconsMock } from './PaymentIcons.mock';

import { PaymentIcons } from '.';

const meta: Meta<typeof PaymentIcons> = {
	title: 'Molecules/PaymentIcons',
	component: PaymentIcons,
	args: paymentIconsMock,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p1r0o56xHSpG3YHnrNlO3P/LP-Design-para-Devs?type=design&node-id=143-439&mode=design&t=0UEsIP4T0BHN5rrA-0',
		},
	},
};

export default meta;
type Story = StoryObj<typeof PaymentIcons>;

const template: Story = {
	render: (args) => <PaymentIcons {...args} />,
};

export const Default: Story = {
	...template,
};
