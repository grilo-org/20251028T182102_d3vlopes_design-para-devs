import { FaqSectionAPI } from '@/api/models/Sections';
import { FaqSectionModel } from '@/domain/models/Sections';

export class FaqSectionMapper {
	static toDomain(api: FaqSectionAPI): FaqSectionModel {
		return {
			id: api.sectionID,
			heading: api.title,
			questions: api.questions,
		};
	}
}
