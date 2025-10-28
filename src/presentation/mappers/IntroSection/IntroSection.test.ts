import { IntroAPI } from '@/api/models/Sections';

import { generateID } from '@/utils/generateID';

import { IntroSectionMapper } from '.';

const mock: IntroAPI = {
	sectionID: 'intro',
	title: 'Você vai ter acesso',
	stats: [
		{
			id: generateID(),
			number: '15',
			text: 'Capítulos',
		},
	],
};

describe('IntroSectionMapper', () => {
	describe('toDomain', () => {
		it('should mapper data for domain model', () => {
			const data = IntroSectionMapper.toDomain(mock);

			expect(data).toStrictEqual({
				id: mock.sectionID,
				heading: mock.title,
				stats: mock.stats,
			});
		});
	});
});
