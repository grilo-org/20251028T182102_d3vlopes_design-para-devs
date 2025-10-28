import { ProjectSectionAPI } from '@/api/models/Sections';
import { ProjectSectionModel } from '@/domain/models/Sections';

export class ProjectSectionMapper {
	static toDomain(api: ProjectSectionAPI): ProjectSectionModel {
		return {
			id: api.sectionID,
			heading: api.title,
			description: api.description,
			video: {
				videoURL: api.videoURL,
				image: {
					src: api.videoThumbnail.url,
					alt: String(api.videoThumbnail.imageDescription),
				},
			},
		};
	}
}
