import { checkoutSectionMock } from '../Checkout/CheckoutSection.mock';

import { RememberCheckoutSectionProps } from '.';

export const rememberCheckoutSectionMock: RememberCheckoutSectionProps = {
	...checkoutSectionMock,
	id: 'remember-checkout',
	heading:
		'<h2>Aproveite a promoção de lançamento e adquira hoje com um <strong>super desconto</strong></h2>',
	button: {
		href: checkoutSectionMock.button.href,
		text: 'Garantir desconto',
	},
};
