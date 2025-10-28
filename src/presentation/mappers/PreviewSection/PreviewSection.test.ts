import { PreviewSectionAPI } from '@/api/models/Sections';

import { generateID } from '@/utils/generateID';

import { PreviewSectionMapper } from '.';

const mock: PreviewSectionAPI = {
	sectionID: 'preview',
	title: 'Preview',
	previews: [
		{
			id: generateID(),
			url: 'https://www.cdn.com.br/preview.jpg',
			imageDescription: 'Loren ipsum dolor',
		},
	],
};

describe('PreviewSectionMapper', () => {
	describe('toDomain', () => {
		it('should ', () => {
			const data = PreviewSectionMapper.toDomain(mock);

			expect(data).toStrictEqual({
				id: mock.sectionID,
				heading: mock.title,
				previews: mock.previews.map((preview) => {
					return {
						id: preview.id,
						src: preview.url,
						alt: String(preview.imageDescription),
					};
				}),
			});
		});
	});
});
