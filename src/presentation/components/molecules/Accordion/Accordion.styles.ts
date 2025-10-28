import { styleWrapper } from '@/libs/styles/tailwind-variants';

const styles = styleWrapper({
	slots: {
		itemStyles:
			'border-b border-neutral-500 text-neutral-50 font-highlight text-[1.5625rem] md:px-3 md:text-9xl',
		triggerWrapperStyles: 'flex',
		triggerStyles:
			'text-left flex flex-1 items-start justify-between py-4 font-bold text transition-all hover:underline [&[data-state=open]>svg]:rotate-180 md:items-center',
		iconStyles: 'h-8 w-8 shrink-0 transition-transform duration-200',
		contentWrapperStyles:
			'overflow-hidden text-base font-body text-neutral-50 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down md:text-2xl md:leading-[170%]',
		contentStyles: 'pb-4 pt-0',
	},
});

const makeStyles = styles();

export const classNames = {
	itemStyles: makeStyles.itemStyles(),
	triggerWrapperStyles: makeStyles.triggerWrapperStyles(),
	triggerStyles: makeStyles.triggerStyles(),
	iconStyles: makeStyles.iconStyles(),
	contentWrapperStyles: makeStyles.contentWrapperStyles(),
	contentStyles: makeStyles.contentStyles(),
};
