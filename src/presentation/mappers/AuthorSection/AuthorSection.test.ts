import { generateID } from '@/utils/generateID';

import { AuthorSectionAPI } from '@/api/models/Sections';

import { AuthorSectionMapper } from '.';

const mock: AuthorSectionAPI = {
	sectionID: 'author',
	description: 'Loren ipsum dolor',
	name: 'John Doe',
	expertise: 'Developer',
	photo: {
		url: 'https://www.cdn.com/photo.jpg',
		imageDescription: 'Image description',
	},
	socials: [
		{
			id: generateID(),
			name: 'Instagram',
			icon: {
				url: 'https://www.cdn.com/icon.svg',
				imageDescription: 'Image description',
			},
			url: 'https://www.instagram.com/username',
		},
	],
};

describe('AuthorSectionMapper', () => {
	describe('toDomain', () => {
		it('should mapper data for domain model', () => {
			const data = AuthorSectionMapper.toDomain(mock);

			expect(data).toStrictEqual({
				id: mock.sectionID,
				description: mock.description,
				name: mock.name,
				expertise: mock.expertise,
				avatar: {
					src: mock.photo.url,
					alt: String(mock.photo.imageDescription),
				},
				socials: mock.socials.map((social) => {
					return {
						id: social.id,
						name: social.name,
						href: social.url,
						src: social.icon.url,
						alt: String(social.icon.imageDescription),
					};
				}),
			});
		});
	});
});
