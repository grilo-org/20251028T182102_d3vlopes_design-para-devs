import { RememberCheckoutSectionAPI } from '@/api/models/Sections';

import { generateID } from '@/utils/generateID';

import { RememberCheckoutSectionMapper } from '.';

const mock: RememberCheckoutSectionAPI = {
	sectionID: 'remember-checkout',
	title: {
		html: '<h2>Headline</h2>',
	},
	originalPrice: '9999,00',
	salePrice: '1,00',
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
	buttonText: 'Quero aprender',
	buttonTarget: 'https://www.hotmart.com/checkout&id=124563',
};

describe('RememberCheckoutSection', () => {
	describe('toDomain', () => {
		it('should mapper data for domain model', () => {
			const data = RememberCheckoutSectionMapper.toDomain(mock);

			expect(data).toStrictEqual({
				id: mock.sectionID,
				heading: mock.title.html.replaceAll('<p></p>', ''),
				originalPrice: mock.originalPrice,
				salePrice: mock.salePrice,
				icons: mock.icons.map((icon) => {
					return {
						...icon,
						src: icon.image.url,
						alt: String(icon.image.imageDescription),
					};
				}),
				button: {
					text: mock.buttonText,
					href: mock.buttonTarget,
				},
			});
		});
	});
});
