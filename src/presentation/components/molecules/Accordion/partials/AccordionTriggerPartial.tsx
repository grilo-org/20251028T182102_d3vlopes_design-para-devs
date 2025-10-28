import { ChevronDown } from 'lucide-react';
import { forwardRef } from 'react';

import {
	AccordionHeaderWrapper,
	AccordionTriggerWrapper,
} from '@/libs/components/headless/radix/Accordion';

import {
	AccordionButtonProps,
	AccordionTriggerProps,
} from '@/libs/components/headless/radix/Accordion/types';

import { classNames } from '../Accordion.styles';

export const AccordionTriggerPartial = forwardRef<
	AccordionButtonProps,
	AccordionTriggerProps
>(({ children, ...props }, ref) => (
	<AccordionHeaderWrapper className={classNames.triggerWrapperStyles}>
		<AccordionTriggerWrapper
			ref={ref}
			className={classNames.triggerStyles}
			{...props}
		>
			{children}

			<ChevronDown
				data-testid="accordion-icon"
				className={classNames.iconStyles}
			/>
		</AccordionTriggerWrapper>
	</AccordionHeaderWrapper>
));
