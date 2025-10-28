import type { Preview } from '@storybook/react';

import '../src/presentation/styles/globals.css';

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'background-500',
			values: [
				{
					name: 'background-200',
					value: 'var(--background-200)',
				},
				{
					name: 'background-300',
					value: 'var(--background-300)',
				},
				{
					name: 'background-400',
					value: 'var(--background-400)',
				},
				{
					name: 'background-500',
					value: 'var(--background-500)',
				},
			],
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

// biome-ignore lint/style/noDefaultExport: <explanation>
export default preview;
