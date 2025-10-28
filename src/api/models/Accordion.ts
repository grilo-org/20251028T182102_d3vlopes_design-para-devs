import { Accordion } from '../generated/graphql';

export type AccordionAPI = Omit<Accordion, 'stage'>;
