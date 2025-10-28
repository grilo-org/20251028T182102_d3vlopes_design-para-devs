import { PaymentIconModel } from '@/domain/models/PaymentIcon';

import { PaymentIconPartial } from './partials/PaymentIconPartial';

export interface PaymentIconsProps {
	icons: PaymentIconModel[];
}

export const PaymentIcons = ({ icons }: PaymentIconsProps) => {
	return (
		<div className="flex gap-6 max-w-max">{icons.map(PaymentIconPartial)}</div>
	);
};
