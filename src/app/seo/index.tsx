import { MainTemplateProps } from '@/presentation/templates/MainTemplate';

export const seoConfig = {
	title: 'Design para Devs',
	description:
		'Design para Devs é um eBook para desenvolvedores frontend que buscam desenvolver soluções que vão além de frameworks e libs, elevando a experiência dos usuários. Você vai aprender tudo que um desenvolvedor precisa saber sobre UX/UI para criar aplicações centrada nos usuários, proporcionando experiências excepcionais para quem utiliza.',
	url: 'https://www.designparadevs.com.br',
};

export const generateJsonLd = (data: MainTemplateProps) => {
	const productJsonLD = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: seoConfig.title,
		image: data.hero.bookImage.src,
		description: seoConfig.description,
		brand: {
			'@type': 'Brand',
			name: data.author.name,
		},
		offers: {
			'@type': 'Offer',
			url: data.hero.buttons.primary.target,
			priceCurrency: 'BRL',
			price: data.checkout.salePrice.replace(',', '.'),
			availability: 'https://schema.org/InStock',
		},
	};

	const bookJsonLd = {
		'@context': 'https://schema.org/',
		'@type': 'Book',
		name: seoConfig.title,
		author: {
			'@type': 'Person',
			name: data.author.name,
			image: data.author.avatar.src,
		},
		bookFormat: 'EBook',
		image: data.hero.bookImage.src,
		description: seoConfig.description,
		datePublished: '2024-01-16',
		inLanguage: 'pt-BR',
		offers: {
			'@type': 'Offer',
			url: data.hero.buttons.primary.target,
			priceCurrency: 'BRL',
			price: data.checkout.salePrice.replace(',', '.'),
			availability: 'https://schema.org/InStock',
		},
	};

	return { productJsonLD, bookJsonLd };
};

interface JsonLdProps {
	data: MainTemplateProps;
}

export const JsonLd = ({ data }: JsonLdProps) => {
	const { productJsonLD, bookJsonLd } = generateJsonLd(data);

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLD) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
			/>
		</>
	);
};
