import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface SlotWrapperProps {
	children: ReactNode;
}

export const SlotWrapper = ({ children }: SlotWrapperProps): JSX.Element => {
	return <Slot>{children}</Slot>;
};
