import type { Meta, StoryObj } from '@storybook/react';

import { chaptersAccordionMock } from './ChaptersAccordion.mock';

import { ChaptersAccordion } from '.';

const meta: Meta<typeof ChaptersAccordion> = {
	title: 'Organisms/ChaptersAccordion',
	component: ChaptersAccordion,
	args: chaptersAccordionMock,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p1r0o56xHSpG3YHnrNlO3P/LP-Design-para-Devs?type=design&node-id=143-281&mode=design&t=QuxfNOq0DxuZRe8u-0',
		},
	},
};

export default meta;
type Story = StoryObj<typeof ChaptersAccordion>;

const template: Story = {
	render: (args) => <ChaptersAccordion {...args} />,
};

export const Default: Story = {
	...template,
};
