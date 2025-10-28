import { styleWrapper } from '@/libs/styles/tailwind-variants';

const styles = styleWrapper({
	slots: {
		containerStyles: 'max-w-[78.4287rem] px-4 xl:px-0',
		fullPageStyles: 'w-full',
		wrapperStyles: 'flex flex-col gap-20 mx-auto md:gap-[10.1875rem]',
		authorSectionStyles: 'bg-background-400 my-20 md:mt-[13rem]',
		previewSectionStyles: 'max-w-[93.75rem] mb-20 md:mb-[13rem]',
		checkoutSectionStyles:
			'mb-20 md:mb-[10.1875rem] lg:px-[5rem] lg:max-w-[78.4287rem]',
		bonusSectionStyles: 'max-w-[93.75rem] my-20 md:my-[10.1875rem]',
		footerStyles: 'mt-20 md:mt-[10.1875rem]',
	},
});

const makeStyles = styles();

export const classNames = {
	containerStyles: makeStyles.containerStyles(),
	fullPageStyles: makeStyles.fullPageStyles(),
	wrapperStyles: makeStyles.wrapperStyles(),
	authorSectionStyles: makeStyles.authorSectionStyles(),
	previewSectionStyles: makeStyles.previewSectionStyles(),
	checkoutSectionStyles: makeStyles.checkoutSectionStyles(),
	bonusSectionStyles: makeStyles.bonusSectionStyles(),
	footerStyles: makeStyles.footerStyles(),
};
