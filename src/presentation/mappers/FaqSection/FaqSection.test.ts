import { FaqSectionAPI } from '@/api/models/Sections';

import { generateID } from '@/utils/generateID';

import { FaqSectionMapper } from '.';

const mock: FaqSectionAPI = {
	sectionID: 'faq',
	title: 'Section Title',
	questions: [
		{
			id: generateID(),
			title: 'Example Title',
			content: 'Loren ipsum dolor',
		},
	],
};

describe('FaqSectionMapper', () => {
	describe('toDomain', () => {
		it('should mapper data for domain model', () => {
			const data = FaqSectionMapper.toDomain(mock);

			expect(data).toStrictEqual({
				id: mock.sectionID,
				heading: mock.title,
				questions: mock.questions,
			});
		});
	});
});
