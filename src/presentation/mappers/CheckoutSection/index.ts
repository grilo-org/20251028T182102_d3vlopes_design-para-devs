import { CheckoutSectionAPI } from '@/api/models/Sections';
import { CheckoutSectionModel } from '@/domain/models/Sections';

export class CheckoutSectionMapper {
	static toDomain(api: CheckoutSectionAPI): CheckoutSectionModel {
		return {
			id: api.sectionID,
			heading: api.title,
			image: {
				src: api.image.url,
				alt: String(api.image.imageDescription),
			},
			originalPrice: api.originalPrice,
			salePrice: api.salePrice,
			button: {
				text: api.button.text,
				href: api.button.target,
			},
			icons: api.icons.map((icon) => {
				return {
					id: icon.id,
					name: icon.name,
					src: icon.image.url,
					alt: String(icon.image.imageDescription),
				};
			}),
		};
	}
}
