import { RememberCheckoutSectionAPI } from '@/api/models/Sections';
import { RememberCheckoutSectionModel } from '@/domain/models/Sections';

export class RememberCheckoutSectionMapper {
	static toDomain(
		api: RememberCheckoutSectionAPI,
	): RememberCheckoutSectionModel {
		return {
			id: api.sectionID,
			heading: api.title.html.replaceAll('<p></p>', ''),
			originalPrice: api.originalPrice,
			salePrice: api.salePrice,
			icons: api.icons.map((icon) => {
				return {
					...icon,
					src: icon.image.url,
					alt: String(icon.image.imageDescription),
				};
			}),
			button: {
				text: api.buttonText,
				href: api.buttonTarget,
			},
		};
	}
}
