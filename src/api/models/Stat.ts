import { Stat } from '../generated/graphql';

export type StatAPI = Omit<Stat, 'stage'>;
