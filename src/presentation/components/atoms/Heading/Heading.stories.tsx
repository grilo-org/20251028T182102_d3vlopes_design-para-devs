import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '.';

const meta: Meta<typeof Heading> = {
	title: 'Atoms/Heading',
	component: Heading,
	parameters: {
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p1r0o56xHSpG3YHnrNlO3P/LP-Design-para-Devs?type=design&node-id=122-634&mode=design&t=7YVjvjs0AXRkCS68-0',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const AsHeading: Story = {
	args: {
		children: (
			<h2 className="text-complementary-white font-heading font-bold text-6xl md:text-9xl">
				Você vai ter acesso
			</h2>
		),
	},
};

export const asHTML: Story = {
	args: {
		className: 'prose-h1:uppercase',
		htmlContent:
			'<h1>Se torne um desenvolvedor que vai <strong>além do código</strong></h1>',
	},
};
