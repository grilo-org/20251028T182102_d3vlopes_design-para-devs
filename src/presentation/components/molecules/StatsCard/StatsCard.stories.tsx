import type { Meta, StoryObj } from '@storybook/react';

import { statsMock as mock } from './StatsCard.mock';

import { StatsCard } from '.';

const meta: Meta<typeof StatsCard> = {
	title: 'Molecules/StatsCard',
	component: StatsCard,
	args: mock[0],
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p1r0o56xHSpG3YHnrNlO3P/LP-Design-para-Devs?type=design&node-id=143-107&mode=design&t=4t5NiTbZSbqSDlzE-0',
		},
	},
};

export default meta;
type Story = StoryObj<typeof StatsCard>;

const template: Story = {
	render: (args) => <StatsCard {...args} />,
};

export const Default: Story = {
	...template,
};
