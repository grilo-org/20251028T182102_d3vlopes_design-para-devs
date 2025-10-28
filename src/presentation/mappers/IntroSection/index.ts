import { IntroAPI } from '@/api/models/Sections';
import { IntroSectionModel } from '@/domain/models/Sections';

export class IntroSectionMapper {
	static toDomain(api: IntroAPI): IntroSectionModel {
		return {
			id: api.sectionID,
			heading: api.title,
			stats: api.stats,
		};
	}
}
