import { ChaptersSectionAPI } from '@/api/models/Sections';
import { ChaptersSectionModel } from '@/domain/models/Sections';

export class ChaptersSectionMapper {
	static toDomain(api: ChaptersSectionAPI): ChaptersSectionModel {
		return {
			id: api.sectionID,
			heading: api.title,
			chapters: api.chapters,
		};
	}
}
