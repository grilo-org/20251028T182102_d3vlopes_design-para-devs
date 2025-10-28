import { PaymentIconModel } from '@/domain/models/PaymentIcon';

import { Image } from '@/presentation/components/atoms/Image';

import { classNames } from '../PaymentIcons.styles';

export const PaymentIconPartial = (icon: PaymentIconModel) => {
	return (
		<div key={icon.id} className={classNames.paymentIconPartialWrapperStyles}>
			<div className={classNames.paymentIconPartialImageStyles}>
				<Image fill src={icon.src} alt={icon.alt} title={icon.name} />
			</div>
			<span className={classNames.paymentIconPartialTextStyles}>
				{icon.name}
			</span>
		</div>
	);
};
