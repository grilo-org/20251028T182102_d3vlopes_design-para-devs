import { styleWrapper } from '@/libs/styles/tailwind-variants';

export const styles = styleWrapper({
	slots: {
		containerStyles:
			'flex flex-col justify-center items-center py-14 max-w-[78.4287rem] lg:flex-row lg:justify-start lg:m-auto lg:px-[5rem] lg:gap-[2.9375rem] lg:pt-16 lg:pb-[5.625rem] xl:px-0',
		contentWrapperStyles: 'flex flex-col items-center lg:items-start',
		headingWrapperStyles: 'flex flex-col mt-4 mb-6 lg:mt-0 lg:mb-8',
		nameStyles:
			'font-heading font-semibold text-8xl text-complementary-white text-center lg:text-left',
		expertiseStyles: 'font-body text-base text-neutral-100 lg:text-4xl',
		descriptionStyles:
			'font-body text-base mt-4 text-center text-neutral-50 px-7 md:max-w-[35rem] lg:mt-8 lg:text-left lg:px-0 xl:max-w-[51.78rem] xl:text-xxl xl:leading-[170%]',
	},
});

const makeStyles = styles();

export const classNames = {
	containerStyles: makeStyles.containerStyles(),
	contentWrapperStyles: makeStyles.contentWrapperStyles(),
	headingWrapperStyles: makeStyles.headingWrapperStyles(),
	nameStyles: makeStyles.nameStyles(),
	expertiseStyles: makeStyles.expertiseStyles(),
	descriptionStyles: makeStyles.descriptionStyles(),
};
