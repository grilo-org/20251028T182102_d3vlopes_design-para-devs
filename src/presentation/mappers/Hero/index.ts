import { HeroAPI } from '@/api/models/Hero';
import { HeroModel } from '@/domain/models/Hero';

export class HeroMapper {
	static toDomain(api: HeroAPI): HeroModel {
		return {
			heading: api.title.html.replaceAll('<p>', '').replaceAll('</p>', ''),
			description: api.description,
			bookImage: {
				src: api.bookImage.url,
				alt: String(api.bookImage.imageDescription),
			},
			buttons: {
				primary: {
					text: api.buttons[0].text,
					target: api.buttons[0].target,
				},
				secondary: {
					text: api.buttons[1].text,
					target: api.buttons[1].target,
				},
			},
		};
	}
}
