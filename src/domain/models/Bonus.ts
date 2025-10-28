import { ImageModel } from './Image';

export interface BenefitType {
	id: string;
	description: string;
}

export interface BonusModel {
	id: string;
	icon: ImageModel;
	title: string;
	description: string;
	benefitTitle: string;
	benefits: BenefitType[];
}
