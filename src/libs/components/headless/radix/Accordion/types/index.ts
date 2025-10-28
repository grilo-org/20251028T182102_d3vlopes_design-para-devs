import * as AccordionPrimitive from '@radix-ui/react-accordion';

export type AccordionRootProps = React.ComponentPropsWithoutRef<
	typeof AccordionPrimitive.Root
>;

export type AccordionElementProps = React.ElementRef<
	typeof AccordionPrimitive.Item
>;
export type AccordionItemProps = React.ComponentPropsWithoutRef<
	typeof AccordionPrimitive.Item
>;
export type AccordionButtonProps = React.ElementRef<
	typeof AccordionPrimitive.Trigger
>;
export type AccordionTriggerProps = React.ComponentPropsWithoutRef<
	typeof AccordionPrimitive.Trigger
>;
export type AccordionContentProps = React.ComponentPropsWithoutRef<
	typeof AccordionPrimitive.Content
>;
export type AccordionHeaderProps = React.ComponentPropsWithoutRef<
	typeof AccordionPrimitive.Header
>;

export interface AccordionContentWrapperProps extends AccordionContentProps {
	ref: React.ForwardedRef<HTMLDivElement>;
}

export interface AccordionItemWrapperProps extends AccordionItemProps {
	ref: React.ForwardedRef<HTMLDivElement>;
}

export interface AccordionTriggerWrapperProps extends AccordionTriggerProps {
	ref: React.ForwardedRef<HTMLButtonElement>;
}
