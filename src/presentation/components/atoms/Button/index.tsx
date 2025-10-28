import { ComponentProps, ReactNode } from 'react';

import { SlotWrapper } from '@/libs/components/headless/radix/Slot';

import { styles } from './styles';

type ButtonBaseProps = ComponentProps<'button'>;

export interface ButtonProps extends ButtonBaseProps {
	children: ReactNode;
	variant?: 'fill' | 'ghost';
	className?: string;
	asChild?: boolean;
}

export const Button = ({ children, asChild = false, ...rest }: ButtonProps) => {
	const Element = asChild ? SlotWrapper : 'button';

	const classNames = styles({ ...rest });

	return <Element className={classNames}>{children}</Element>;
};
