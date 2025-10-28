import { generateID } from '@/utils/generateID';

import { BonusModel } from '@/domain/models/Bonus';

export const bonusCardMock: BonusModel[] = [
	{
		id: generateID(),
		icon: {
			src: 'https://media.graphassets.com/bfjH5gwbSZ24nF8iEe21',
			alt: 'Ícone do Discord',
		},
		title: 'Comunidade exclusiva',
		description:
			'Uma comunidade no Discord para conhecer outros devs, trocar conhecimentos e tirar dúvidas.',
		benefitTitle: 'Nesta comunidade, você pode',
		benefits: [
			{
				id: generateID(),
				description: 'Fazer networking',
			},
			{
				id: generateID(),
				description: 'Divulgar seus projetos',
			},
			{
				id: generateID(),
				description: 'Obter análise do seu código por mim',
			},
			{
				id: generateID(),
				description: 'Tirar dúvidas',
			},
		],
	},
	{
		id: generateID(),
		icon: {
			src: 'https://media.graphassets.com/o3ZF4RCMS16tFRMXck2l',
			alt: 'Ícone do Notion',
		},
		title: 'Lista de Recursos',
		description:
			'Acesso a uma lista crescente de recursos no Notion para você aprender ainda mais sobre design.',
		benefitTitle: 'Essa lista contém',
		benefits: [
			{
				id: generateID(),
				description: 'Design Systems',
			},
			{
				id: generateID(),
				description: 'Artigos',
			},
			{
				id: generateID(),
				description: 'Ferramentas',
			},
			{
				id: generateID(),
				description: 'Case Study',
			},
		],
	},
	{
		id: generateID(),
		icon: {
			src: 'https://media.graphassets.com/oBpHb7PQduZBg7Dv7K7A',
			alt: 'Ícone do Figma junto com o ícone do Storybook',
		},
		title: 'Conteúdos complementares',
		description:
			'Tenha acesso a conteúdos complementares relacionados ao assunto principal do eBook para elevar ainda mais suas habilidades.',
		benefitTitle: 'Você vai aprender',
		benefits: [
			{
				id: generateID(),
				description: 'Automação com plop.js',
			},
			{
				id: generateID(),
				description: 'Figma para Devs',
			},
			{
				id: generateID(),
				description: 'Integrando Figma ao Storybook',
			},
		],
	},
];
