import { Button, Heading, Image, PaymentIcons } from '../../exports';

import { classNames } from '../../CheckoutSection.styles';

import { CheckoutSectionProps } from '../..';

export const DesktopVersion = (props: CheckoutSectionProps) => {
	return (
		<div className={classNames.wrapperDesktopStyles}>
			<div className={classNames.imageStyles}>
				<Image fill src={props.image.src} alt={props.image.alt} />
			</div>

			<div>
				<Heading>
					<h2 className={classNames.headingStyles}>{props.heading}</h2>
				</Heading>

				<div className={classNames.priceWrapperStyles}>
					<span className={classNames.originalPriceStyles}>
						De{' '}
						<strong className={classNames.originalPriceStrongStyles}>
							R$ {props.originalPrice}
						</strong>{' '}
						por apenas
					</span>

					<strong className={classNames.salePriceStrongStyles}>
						R$ {props.salePrice}
					</strong>
				</div>

				<a
					href={props.button.href}
					target="_blank"
					rel="noreferrer"
					className={classNames.anchorButtonStyles}
				>
					<Button className={classNames.buttonStyles}>
						{props.button.text}
					</Button>
				</a>

				<div className={classNames.paymentMethodWrapperStyles}>
					<p className={classNames.paymentMethodTextStyles}>
						Formas de pagamento
					</p>

					<PaymentIcons icons={props.icons} />
				</div>
			</div>
		</div>
	);
};
