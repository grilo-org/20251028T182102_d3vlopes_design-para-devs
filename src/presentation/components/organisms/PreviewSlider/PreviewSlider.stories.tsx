import type { Meta, StoryObj } from '@storybook/react';

import { previewSliderMock } from './PreviewSlider.mock';

import { PreviewSlider } from '.';

const meta: Meta<typeof PreviewSlider> = {
	title: 'Organisms/PreviewSlider',
	component: PreviewSlider,
	args: previewSliderMock,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p1r0o56xHSpG3YHnrNlO3P/LP-Design-para-Devs?type=design&node-id=143-399&mode=design&t=9iKG0T2HeUbm2x4P-0',
		},
	},
};

export default meta;
type Story = StoryObj<typeof PreviewSlider>;

const template: Story = {
	render: (args) => <PreviewSlider {...args} />,
};

export const Default: Story = {
	...template,
};
