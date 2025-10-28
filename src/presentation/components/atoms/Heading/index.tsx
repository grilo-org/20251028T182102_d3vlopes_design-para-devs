import { ReactNode } from 'react';

import { HeadingFactory } from './Heading.factory';

import { headingAsHTMLStyles } from './Heading.styles';

export interface HeadingProps {
	children?: ReactNode;
	htmlContent?: string;
	className?: string;
}

export const Heading = ({ children, ...rest }: HeadingProps) => {
	const styles = headingAsHTMLStyles();

	const headingAsHTMLProps = {
		...rest,
		styles,
	};

	return HeadingFactory.make(headingAsHTMLProps, children);
};
