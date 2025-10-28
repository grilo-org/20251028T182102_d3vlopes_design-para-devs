import type { Meta, StoryObj } from '@storybook/react';

import { statsCardsMock } from './StatsCards.mock';

import { StatsCards } from '.';

const meta: Meta<typeof StatsCards> = {
	title: 'Organisms/StatsCards',
	component: StatsCards,
	args: statsCardsMock,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p1r0o56xHSpG3YHnrNlO3P/LP-Design-para-Devs?type=design&node-id=143-147&mode=design&t=oJYkp87cyAhPEARg-0',
		},
	},
};

export default meta;
type Story = StoryObj<typeof StatsCards>;

const template: Story = {
	render: (args) => (
		<div className="flex justify-center">
			<StatsCards {...args} />
		</div>
	),
};

export const Default: Story = {
	...template,
};
