import resolveConfig from 'tailwindcss/resolveConfig';

import { content, theme as twTheme } from '../../tailwind.config';

export function getTailwindTheme() {
	const { theme } = resolveConfig({ twTheme, content });

	return theme;
}
