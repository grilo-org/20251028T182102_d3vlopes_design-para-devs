import type { Meta, StoryObj } from '@storybook/react';

import { bonusCardSliderMock } from './BonusCardSlider.mock';

import { BonusCardSlider } from '.';

const meta: Meta<typeof BonusCardSlider> = {
	title: 'Organisms/BonusCardSlider',
	component: BonusCardSlider,
	args: bonusCardSliderMock,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p1r0o56xHSpG3YHnrNlO3P/LP-Design-para-Devs?type=design&node-id=325-401&mode=design&t=Z5d8zymNiqpqaMmc-0',
		},
	},
};

export default meta;
type Story = StoryObj<typeof BonusCardSlider>;

const template: Story = {
	render: (args) => <BonusCardSlider {...args} />,
};

export const Default: Story = {
	...template,
};
