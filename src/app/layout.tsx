import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter, Kanit, Open_Sans } from 'next/font/google';

import '@/presentation/styles/globals.css';

import { cn } from '@/utils/cn';

import { seoConfig } from './seo';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '700', '800'],
	display: 'swap',
	variable: '--font-highlight',
});

const kanit = Kanit({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	display: 'swap',
	variable: '--font-heading',
});

const openSans = Open_Sans({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	display: 'swap',
	variable: '--font-body',
});

export const metadata: Metadata = {
	title: seoConfig.title,
	description: seoConfig.description,
	authors: [
		{
			name: 'Leandro Lopes',
			url: 'https://github.com/d3vlopes',
		},
	],
	keywords: [
		'Frontend',
		'React',
		'JavaScript',
		'Typescript',
		'Storybook',
		'eBook',
		'Livro',
		'Desenvolvedor',
		'Dev',
		'Design',
		'Design para Devs',
		'Design Thinking',
		'Design Centrado no Usuário',
		'Leandro Lopes',
	],
	metadataBase: new URL(seoConfig.url),
	openGraph: {
		title: seoConfig.title,
		description: seoConfig.description,
		url: seoConfig.url,
		siteName: 'Design para Devs',
		locale: 'pt-BR',
		images: [
			{
				url: 'https://media.graphassets.com/N0qVhJI3RJaf8GkH2nwz',
				alt: 'Imagem da seção hero do site',
				width: 1200,
				height: 631,
			},
		],
	},
};

const fonts = cn(`${openSans.variable} ${kanit.variable} ${inter.variable}`);

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" className={String(fonts)}>
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
			</head>
			<body
				className={cn(
					'min-h-screen font-body antialiased bg-background-500 text-complementary-white',
				)}
			>
				{children}
				<SpeedInsights />
			</body>
		</html>
	);
}
