import type { Meta, StoryObj } from '@storybook/react';

import { bonusCardMock } from './BonusCard.mock';

import { BonusCard } from '.';

const meta: Meta<typeof BonusCard> = {
	title: 'Molecules/BonusCard',
	component: BonusCard,
	args: bonusCardMock[0],
	parameters: {
		layout: 'fullscreen',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p1r0o56xHSpG3YHnrNlO3P/LP-Design-para-Devs?type=design&node-id=325-400&mode=design&t=Z5d8zymNiqpqaMmc-0',
		},
	},
};

export default meta;
type Story = StoryObj<typeof BonusCard>;

const template: Story = {
	render: (args) => (
		<div className="max-w-[612px] m-auto p-8">
			<BonusCard {...args} />
		</div>
	),
};

export const Default: Story = {
	...template,
};
