import { FooterAPI } from '@/api/models/Sections';
import { FooterModel } from '@/domain/models/Footer';

export class FooterMapper {
	static toDomain(api: FooterAPI): FooterModel {
		return {
			authorCopyright: api.authorCopyright,
		};
	}
}
