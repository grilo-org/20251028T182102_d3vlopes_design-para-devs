import { ProjectSectionAPI } from '@/api/models/Sections';

import { ProjectSectionMapper } from '.';

const mock: ProjectSectionAPI = {
	sectionID: 'project',
	description: 'Loren ispum dolor',
	title: 'Section Title',
	videoURL: 'https://www.cdn.com/video.mp4',
	videoThumbnail: {
		url: 'https://www.cdn.com/image.png',
		imageDescription: 'Loren ipsum dolor',
	},
};

describe('ProjectSectionMapper', () => {
	describe('toDomain', () => {
		it('should mapper data for domain model', () => {
			const data = ProjectSectionMapper.toDomain(mock);

			expect(data).toStrictEqual({
				id: mock.sectionID,
				heading: mock.title,
				description: mock.description,
				video: {
					videoURL: mock.videoURL,
					image: {
						src: mock.videoThumbnail.url,
						alt: mock.videoThumbnail.imageDescription ?? '',
					},
				},
			});
		});
	});
});
