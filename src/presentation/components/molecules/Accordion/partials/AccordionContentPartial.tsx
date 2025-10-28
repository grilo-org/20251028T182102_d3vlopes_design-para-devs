import { forwardRef } from 'react';

import { AccordionContentWrapper } from '@/libs/components/headless/radix/Accordion';
import {
	AccordionContentProps,
	AccordionElementProps,
} from '@/libs/components/headless/radix/Accordion/types';

import { classNames } from '../Accordion.styles';

export const AccordionContentPartial = forwardRef<
	AccordionElementProps,
	AccordionContentProps
>(({ children, ...props }, ref) => (
	<AccordionContentWrapper
		ref={ref}
		className={classNames.contentWrapperStyles}
		{...props}
	>
		<div className={classNames.contentStyles}>{children}</div>
	</AccordionContentWrapper>
));
