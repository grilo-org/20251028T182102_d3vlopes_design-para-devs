import { ChaptersSectionAPI } from '@/api/models/Sections';

import { generateID } from '@/utils/generateID';

import { ChaptersSectionMapper } from '.';

const mock: ChaptersSectionAPI = {
	sectionID: generateID(),
	title: 'Title section',
	chapters: [
		{
			id: generateID(),
			title: 'Title',
			content: 'Loren ipsum dolor',
		},
	],
};

describe('ChaptersSectionMapper', () => {
	describe('toDomain', () => {
		it('should mapper data for domain model', () => {
			const data = ChaptersSectionMapper.toDomain(mock);

			expect(data).toStrictEqual({
				id: mock.sectionID,
				heading: mock.title,
				chapters: mock.chapters,
			});
		});
	});
});
