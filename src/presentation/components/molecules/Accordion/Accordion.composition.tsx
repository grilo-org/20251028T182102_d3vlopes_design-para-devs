import { AccordionRootWrapper } from '@/libs/components/headless/radix/Accordion';

import { AccordionContentPartial } from './partials/AccordionContentPartial';
import { AccordionItemPartial } from './partials/AccordionItemPartial';
import { AccordionTriggerPartial } from './partials/AccordionTriggerPartial';

export const AccordionComposition = {
	Root: AccordionRootWrapper,
	Item: AccordionItemPartial,
	Title: AccordionTriggerPartial,
	Content: AccordionContentPartial,
};
