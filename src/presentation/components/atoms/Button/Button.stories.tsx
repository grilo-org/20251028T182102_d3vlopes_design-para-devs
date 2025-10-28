import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
	args: {
		children: 'Button',
		variant: 'fill',
		asChild: false,
	},
	parameters: {
		layout: 'fullscreen',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/p1r0o56xHSpG3YHnrNlO3P/LP-Design-para-Devs?type=design&node-id=117-584&mode=design&t=7YVjvjs0AXRkCS68-0',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

const template: Story = {
	render: (args) => (
		<div className="p-2">
			<Button {...args} />
		</div>
	),
};

export const Default: Story = {
	...template,
	args: {
		children: 'Garantir desconto',
	},
};

export const Ghost: Story = {
	...template,
	args: {
		variant: 'ghost',
		children: 'Visualizar Preview',
	},
};

export const WithCustomClass: Story = {
	...template,
	args: {
		children: 'Comprar agora',
		className: 'text-lg w-full md:w-[200px]',
	},
};

export const AsAnchor: Story = {
	render: (args) => (
		<div className="p-2">
			<Button {...args}>
				<a href="#preview-section">Anchor</a>
			</Button>
		</div>
	),
	args: {
		asChild: true,
	},
};
