import { Icon } from '../generated/graphql';

import { ImageAPI } from './Image';

export type PaymentIconAPI = Pick<Icon, 'name' | 'id'> & { image: ImageAPI };
