import { ImageModel } from './Image';

interface ButtonHeroProps {
	text: string;
	target: string;
}

export interface HeroModel {
	heading: string;
	description: string;
	bookImage: ImageModel;
	buttons: {
		primary: ButtonHeroProps;
		secondary: ButtonHeroProps;
	};
}
