import { ReactNode } from 'react';

import { sanitizeHTMLWrapper } from '@/libs/sanitizers/sanitize-html';

import { SlotWrapper } from '@/libs/components/headless/radix/Slot';

import { cn } from '@/utils/cn';

import { HeadingProps } from '.';

export interface HeadingAsHTMLProps extends Omit<HeadingProps, 'children'> {
	styles?: string;
}

export class HeadingFactory {
	static make(headingAsHTML: HeadingAsHTMLProps, children: ReactNode) {
		const clearHTML = sanitizeHTMLWrapper(headingAsHTML.htmlContent ?? '');

		const headingAsHTMLClassNames = cn(
			headingAsHTML.styles,
			headingAsHTML.className,
		);

		switch (headingAsHTML.htmlContent !== undefined) {
			case true:
				return (
					<div
						data-testid="heading-wrapper"
						className={headingAsHTMLClassNames}
						dangerouslySetInnerHTML={{
							__html: clearHTML,
						}}
					/>
				);

			default:
				return <SlotWrapper>{children}</SlotWrapper>;
		}
	}
}
