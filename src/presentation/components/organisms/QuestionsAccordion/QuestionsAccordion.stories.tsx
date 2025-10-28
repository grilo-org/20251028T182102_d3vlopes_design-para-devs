import type { Meta, StoryObj } from '@storybook/react';

import { questionsAccordionMock } from './QuestionsAccordion.mock';

import { QuestionsAccordion } from '.';

const meta: Meta<typeof QuestionsAccordion> = {
	title: 'Organisms/QuestionsAccordion',
	component: QuestionsAccordion,
	args: questionsAccordionMock,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p1r0o56xHSpG3YHnrNlO3P/LP-Design-para-Devs?type=design&node-id=440-284&mode=design&t=Z5d8zymNiqpqaMmc-0',
		},
	},
};

export default meta;
type Story = StoryObj<typeof QuestionsAccordion>;

const template: Story = {
	render: (args) => <QuestionsAccordion {...args} />,
};

export const Default: Story = {
	...template,
};
