import { BonusSectionAPI } from '@/api/models/Sections';

import { generateID } from '@/utils/generateID';

import { BonusSectionMapper } from '.';

const mock: BonusSectionAPI = {
	sectionID: 'bonus',
	title: 'Section Title',
	bonus: [
		{
			id: generateID(),
			title: 'Bonus Title',
			description: 'Loren ipsum dolor',
			benefitTitle: 'Benefit Title',
			icon: {
				url: 'https://www.cdn.com/icon.svg',
				imageDescription: 'Loren ipsum dolor',
			},
			benefits: [
				{
					id: generateID(),
					description: 'Loren ipsum dolor',
				},
			],
		},
	],
};

describe('BonusSectionMapper', () => {
	describe('toDomain', () => {
		it('should mapper data for domain model', () => {
			const data = BonusSectionMapper.toDomain(mock);

			expect(data).toStrictEqual({
				id: mock.sectionID,
				heading: mock.title,
				bonus: mock.bonus.map((bonus) => {
					return {
						...bonus,
						icon: {
							src: bonus.icon.url,
							alt: String(bonus.icon.imageDescription),
						},
					};
				}),
			});
		});
	});
});
