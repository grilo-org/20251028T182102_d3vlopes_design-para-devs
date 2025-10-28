import { HeroAPI } from '@/api/models/Hero';

import { HeroMapper } from '.';

const mock: HeroAPI = {
	title: {
		html: '<h1>Se torne um desenvolvedor que vai <strong>além do código</strong></h1>',
	},
	description:
		'Aprenda a aplicar conceitos de design no desenvolvimento de software para criar aplicações que vão além de frameworks e libs, elevando a experiência dos usuários.',
	bookImage: {
		url: 'https://media.graphassets.com/NRDgi138ReqCWdYg7l1j',
		imageDescription:
			'Capa do eBook com um desenvolvedor em frente ao computador, escrevendo código',
	},
	buttons: [
		{
			text: 'Comprar agora',
			target:
				'https://pay.hotmart.com/Y88426530P?checkoutMode=10&offDiscount=LANCAMENTO',
		},
		{
			text: 'Visualizar Preview',
			target: '#preview',
		},
	],
};

describe('HeroMapper', () => {
	describe('toDomain', () => {
		it('should mapper data for domain model', () => {
			const data = HeroMapper.toDomain(mock);

			expect(data).toStrictEqual({
				heading: mock.title.html,
				description: mock.description,
				bookImage: {
					src: mock.bookImage.url,
					alt: String(mock.bookImage.imageDescription),
				},
				buttons: {
					primary: {
						text: mock.buttons[0].text,
						target: mock.buttons[0].target,
					},
					secondary: {
						text: mock.buttons[1].text,
						target: mock.buttons[1].target,
					},
				},
			});
		});
	});
});
