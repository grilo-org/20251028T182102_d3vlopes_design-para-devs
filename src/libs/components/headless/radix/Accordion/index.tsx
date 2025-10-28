import {
	Content,
	Header,
	Item,
	Root,
	Trigger,
} from '@radix-ui/react-accordion';

import {
	AccordionContentWrapperProps,
	AccordionHeaderProps,
	AccordionItemWrapperProps,
	AccordionRootProps,
	AccordionTriggerWrapperProps,
} from './types';

export const AccordionRootWrapper = ({
	children,
	...props
}: AccordionRootProps): JSX.Element => {
	return <Root {...props}>{children}</Root>;
};

export const AccordionContentWrapper = ({
	children,
	ref,
	...props
}: AccordionContentWrapperProps): JSX.Element => {
	return (
		<Content ref={ref} {...props}>
			{children}
		</Content>
	);
};

export const AccordionItemWrapper = ({
	ref,
	...props
}: AccordionItemWrapperProps): JSX.Element => {
	return <Item ref={ref} {...props} />;
};

export const AccordionHeaderWrapper = ({
	children,
	...props
}: AccordionHeaderProps): JSX.Element => {
	return <Header {...props}>{children}</Header>;
};

export const AccordionTriggerWrapper = ({
	ref,
	children,
	...props
}: AccordionTriggerWrapperProps): JSX.Element => {
	return (
		<Trigger ref={ref} {...props}>
			{children}
		</Trigger>
	);
};
