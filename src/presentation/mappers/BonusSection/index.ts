import { BonusSectionAPI } from '@/api/models/Sections';
import { BonusSectionModel } from '@/domain/models/Sections';

export class BonusSectionMapper {
	static toDomain(api: BonusSectionAPI): BonusSectionModel {
		return {
			id: api.sectionID,
			heading: api.title,
			bonus: api.bonus.map((bonus) => {
				return {
					...bonus,
					icon: {
						src: bonus.icon.url,
						alt: String(bonus.icon.imageDescription),
					},
				};
			}),
		};
	}
}
