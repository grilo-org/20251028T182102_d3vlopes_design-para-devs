import { paymentIconsMock } from '@/presentation/components/molecules/PaymentIcons/PaymentIcons.mock';

import { CheckoutSectionProps } from '.';

export const checkoutSectionMock: CheckoutSectionProps = {
	id: 'checkout',
	image: {
		src: 'https://media.graphassets.com/NRDgi138ReqCWdYg7l1j',
		alt: 'Capa do eBook com um desenvolvedor em frente ao computador, escrevendo código',
	},
	heading: 'Se diferencie como dev, comece a estudar design agora!',
	originalPrice: '60,00',
	salePrice: '9,90',
	button: {
		text: 'Quero aprender',
		href: 'https://pay.hotmart.com/Y88426530P?checkoutMode=10&offDiscount=LANCAMENTO',
	},
	icons: paymentIconsMock.icons,
};
