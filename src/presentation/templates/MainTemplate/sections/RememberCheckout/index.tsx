import { RememberCheckoutSectionModel } from '@/domain/models/Sections';

import { Button } from '@/presentation/components/atoms/Button';
import { Heading } from '@/presentation/components/atoms/Heading';
import { PaymentIcons } from '@/presentation/components/molecules/PaymentIcons';

import { classNames } from './RememberCheckoutSection.styles';

export type RememberCheckoutSectionProps = RememberCheckoutSectionModel;

export const RememberCheckoutSection = (
	props: RememberCheckoutSectionProps,
) => {
	return (
		<section id={props.id} className={classNames.wrapperStyles}>
			<Heading
				className={classNames.headingStyles}
				htmlContent={props.heading}
			/>

			<div className={classNames.priceWrapperStyles}>
				<span className={classNames.originalPriceStyles}>
					De{' '}
					<strong className={classNames.originalPriceStrongStyles}>
						R$ {props.originalPrice}
					</strong>
				</span>

				<span className={classNames.salePriceStyles}>Por apenas</span>

				<strong className={classNames.salePriceStrongStyles}>
					R$ {props.salePrice}
				</strong>
			</div>

			<a href={props.button.href} target="_blank" rel="noreferrer">
				<Button className={classNames.buttonStyles}>{props.button.text}</Button>
			</a>

			<div className={classNames.paymentMethodWrapperStyles}>
				<p className={classNames.paymentMethodTextStyles}>
					Formas de pagamento
				</p>

				<PaymentIcons icons={props.icons} />
			</div>
		</section>
	);
};
