import { Benefit, Bonus } from '../generated/graphql';

import { ImageAPI } from './Image';

type BenefitAPI = Pick<Benefit, 'id' | 'description'>;

export type BonusAPI = Pick<
	Bonus,
	'id' | 'title' | 'description' | 'benefitTitle'
> & {
	icon: ImageAPI;
	benefits: BenefitAPI[];
};
