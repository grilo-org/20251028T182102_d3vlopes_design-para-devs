import { generateID } from '@/utils/generateID';

import { QuestionsAccordionProps } from '.';

export const questionsAccordionMock: QuestionsAccordionProps = {
	items: [
		{
			id: generateID(),
			title: 'Como vou acessar o eBook?',
			content:
				'O acesso acontece pela plataforma da Hotmart. Após o pagamento ser aprovado você vai receber um email com instruções de como acessar o produto.',
		},
		{
			id: generateID(),
			title: 'Como vou acessar a comunidade?',
			content:
				'Ao acessar a plataforma da Hotmart, você vai ter acesso a 2 arquivos pdf, um deles contém o link para a comunidade, basta clicar nele para acessar.',
		},
		{
			id: generateID(),
			title: 'Vou ter acesso ao repositório do projeto?',
			content:
				'Sim, ao acessar a comunidade você vai deixar o seu Github e será feito a liberação do repositório para seu usuário.',
		},
		{
			id: generateID(),
			title: 'O acesso é vitalício?',
			content: 'Sim, ao comprar você tem acesso ao conteúdo para sempre!',
		},
		{
			id: generateID(),
			title: 'O eBook tem atualização?',
			content:
				'Sim, estou constantemente fazendo alterações e melhorando o conteúdo para tornar a explicação melhor e mais simples.',
		},
	],
};
