import { AuthorSectionAPI } from '@/api/models/Sections';
import { AuthorSectionModel } from '@/domain/models/Sections';

export class AuthorSectionMapper {
	static toDomain(api: AuthorSectionAPI): AuthorSectionModel {
		return {
			id: api.sectionID,
			description: api.description,
			name: api.name,
			expertise: api.expertise,
			avatar: {
				src: api.photo.url,
				alt: String(api.photo.imageDescription),
			},
			socials: api.socials.map((social) => {
				return {
					id: social.id,
					name: social.name,
					href: social.url,
					src: social.icon.url,
					alt: String(social.icon.imageDescription),
				};
			}),
		};
	}
}
