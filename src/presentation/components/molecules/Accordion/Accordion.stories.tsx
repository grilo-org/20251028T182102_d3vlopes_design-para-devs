import type { Meta, StoryObj } from '@storybook/react';

import { accordionMock } from './Accordion.mock';

import { Accordion } from '.';

const meta: Meta<typeof Accordion> = {
	title: 'Molecules/Accordion',
	component: Accordion,
	args: accordionMock,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p1r0o56xHSpG3YHnrNlO3P/LP-Design-para-Devs?type=design&node-id=143-280&mode=design&t=QuxfNOq0DxuZRe8u-0',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const template: Story = {
	render: (args) => (
		<div className="max-w-[76.75rem] m-auto">
			<Accordion {...args} />
		</div>
	),
};

export const Default: Story = {
	...template,
};
