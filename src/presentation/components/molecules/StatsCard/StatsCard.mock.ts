import { generateID } from '@/utils/generateID';

import { StatsCardProps } from '.';

export const statsMock: StatsCardProps[] = [
	{
		id: generateID(),
		number: '15',
		text: 'Capítulos',
	},
	{
		id: generateID(),
		number: '+250',
		text: 'Páginas',
	},
	{
		id: generateID(),
		number: '3',
		text: 'Bônus',
	},
];
