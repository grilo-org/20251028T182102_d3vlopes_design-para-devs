import { Social } from '../generated/graphql';

import { ImageAPI } from './Image';

export type SocialAPI = Omit<Social, 'icon' | 'stage'> & {
	icon: ImageAPI;
};
