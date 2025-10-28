import { ImageModel } from './Image';

export interface SocialIconModel extends ImageModel {
	id: string;
	name: string;
	href: string;
}
