import { CheckoutSectionAPI } from '@/api/models/Sections';

import { generateID } from '@/utils/generateID';

import { CheckoutSectionMapper } from '.';

const mock: CheckoutSectionAPI = {
	sectionID: 'checkout',
	title: 'Headline section',
	originalPrice: '999,00',
	salePrice: '1,00',
	image: {
		url: 'https://www.cnd.com/image.png',
		imageDescription: 'Loren ipsum dolor',
	},
	button: {
		text: 'Comprar agora',
		target: 'https://www.hotmart.com/checkout&id=124668',
	},
	icons: [
		{
			id: generateID(),
			name: 'Icon Name',
			image: {
				url: 'https://www.cdn.com/icon.svg',
				imageDescription: 'Loren ipsum dolor',
			},
		},
	],
};

describe('CheckoutSectionMapper', () => {
	describe('toDomain', () => {
		it('should mapper data for domain model', () => {
			const data = CheckoutSectionMapper.toDomain(mock);

			expect(data).toStrictEqual({
				id: mock.sectionID,
				heading: mock.title,
				image: {
					src: mock.image.url,
					alt: String(mock.image.imageDescription),
				},
				originalPrice: mock.originalPrice,
				salePrice: mock.salePrice,
				button: {
					text: mock.button.text,
					href: mock.button.target,
				},
				icons: mock.icons.map((icon) => {
					return {
						id: icon.id,
						name: icon.name,
						src: icon.image.url,
						alt: String(icon.image.imageDescription),
					};
				}),
			});
		});
	});
});
