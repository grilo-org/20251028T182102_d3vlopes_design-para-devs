import { generateID } from '@/utils/generateID';

import { PaymentIconsProps } from '.';

export const paymentIconsMock: PaymentIconsProps = {
	icons: [
		{
			id: generateID(),
			name: 'Cartão',
			src: 'https://media.graphassets.com/H9mGhU1JSCWlxS7gLttb',
			alt: 'Um quadrado representando um cartão de crédito',
		},
		{
			id: generateID(),
			name: 'Pix',
			src: 'https://media.graphassets.com/FBLLY6c9QgZJWW2Hxl7I',
			alt: 'Um triângulo divido em três partes',
		},
		{
			id: generateID(),
			name: 'Boleto',
			src: 'https://media.graphassets.com/7Jp6jlWdTduM4SKXwrTL',
			alt: 'Um quadrado com pequenos retângulos dentro',
		},
	],
};
