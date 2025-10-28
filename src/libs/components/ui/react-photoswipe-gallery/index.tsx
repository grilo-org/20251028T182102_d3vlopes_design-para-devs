import { ReactNode } from 'react';

import 'photoswipe/dist/photoswipe.css';

import { Gallery, Item } from 'react-photoswipe-gallery';
import type { ItemProps } from 'react-photoswipe-gallery';

export interface LightboxWrapperProps {
	children: ReactNode;
}

export interface LightboxItemWrapperProps
	extends LightboxWrapperProps,
		ItemProps<HTMLElement> {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	children: any;
	wrapperClassName?: string;
}

export const LightboxWrapper = ({ children }: LightboxWrapperProps) => {
	return <Gallery>{children}</Gallery>;
};

export const LightboxItemWrapper = ({
	children,
	wrapperClassName,
	...props
}: LightboxItemWrapperProps) => {
	return (
		<Item {...props}>
			{({ ref, open }) => (
				<button
					type="button"
					ref={ref}
					className={wrapperClassName}
					onClick={open}
				>
					{children}
				</button>
			)}
		</Item>
	);
};
