import { HeroProps } from '.';

export const heroMock: HeroProps = {
	heading:
		'<h1>Se torne um desenvolvedor que vai <strong>além do código</strong></h1>',
	description:
		'Aprenda a aplicar conceitos de design no desenvolvimento de software para criar aplicações que vão além de frameworks e libs, elevando a experiência dos usuários.',
	bookImage: {
		src: 'https://media.graphassets.com/NRDgi138ReqCWdYg7l1j',
		alt: 'Capa do eBook com um desenvolvedor em frente ao computador, escrevendo código ',
	},
	buttons: {
		primary: {
			text: 'Comprar agora',
			target:
				'https://pay.hotmart.com/Y88426530P?checkoutMode=10&offDiscount=LANCAMENTO',
		},
		secondary: {
			text: 'Visualizar Preview',
			target: '#preview',
		},
	},
};
