import { Asset } from '../generated/graphql';

export type ImageAPI = Pick<Asset, 'url' | 'imageDescription'>;
