import { forwardRef } from 'react';

import { AccordionItemWrapper } from '@/libs/components/headless/radix/Accordion';
import {
	AccordionElementProps,
	AccordionItemProps,
} from '@/libs/components/headless/radix/Accordion/types';

import { classNames } from '../Accordion.styles';

export const AccordionItemPartial = forwardRef<
	AccordionElementProps,
	AccordionItemProps
>(({ ...props }, ref) => (
	<AccordionItemWrapper
		ref={ref}
		className={classNames.itemStyles}
		{...props}
	/>
));
