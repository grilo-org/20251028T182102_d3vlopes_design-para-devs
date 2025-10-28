import { Hero } from '@/api/generated/graphql';

import { ButtonAPI } from './Button';
import { ImageAPI } from './Image';
import { RichTextAPI } from './RichText';

export type HeroAPI = Pick<Hero, 'description'> & {
	title: RichTextAPI;
	bookImage: ImageAPI;
	buttons: ButtonAPI[];
};
