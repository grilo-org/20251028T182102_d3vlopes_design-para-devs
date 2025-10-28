import { generateID } from '@/utils/generateID';

import { AccordionProps } from '.';

export const accordionMock: AccordionProps = {
	id: generateID(),
	title: 'Accordion Title',
	content: 'Loren ipsum dolor sit amet, consectetur adipiscing elit',
};
