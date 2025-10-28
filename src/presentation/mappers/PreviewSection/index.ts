import { PreviewSectionAPI } from '@/api/models/Sections';
import { PreviewSectionModel } from '@/domain/models/Sections';

export class PreviewSectionMapper {
	static toDomain(api: PreviewSectionAPI): PreviewSectionModel {
		return {
			id: api.sectionID,
			heading: api.title,
			previews: api.previews.map((preview) => {
				return {
					id: preview.id,
					src: preview.url,
					alt: String(preview.imageDescription),
				};
			}),
		};
	}
}
