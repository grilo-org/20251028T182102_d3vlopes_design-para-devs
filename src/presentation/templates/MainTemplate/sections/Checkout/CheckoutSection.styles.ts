import { styleWrapper } from '@/libs/styles/tailwind-variants';

const styles = styleWrapper({
	slots: {
		wrapperMobileStyles: 'flex flex-col items-center py-[3.25rem] lg:hidden',
		wrapperDesktopStyles:
			'hidden flex-col items-center py-[3.25rem] lg:flex lg:flex-row lg:justify-center lg:pt-14 lg:pb-11 lg:gap-[2rem] lg:mr-[2rem] lg:ml-4',
		imageStyles:
			'relative w-[15.3125rem] h-[21.3125rem] mt-5 mb-11 lg:mt-0l g:mb-0 lg:w-[23.125rem] lg:h-[31.125rem]',
		headingStyles:
			'font-heading font-bold text-[2.5rem] leading-[2.5rem] text-complementary-white text-center w-[23.4375rem] lg:text-left lg:text-6xl lg:leading-[2.25rem] xl:text-9xl xl:leading-[2.875rem] xl:w-[34.6875rem]',
		priceWrapperStyles: 'flex flex-col justify-start md:my-4',
		originalPriceStyles:
			'font-highlight text-2xl leading-[1.5rem] text-neutral-50 font-normal',
		originalPriceStrongStyles:
			'line-through text-complementary-red font-normal',
		salePriceStrongStyles:
			'relative left-[-2px] font-highlight font-bold text-12xl leading-[4.5rem] text-complementary-green max-w-max',
		anchorButtonStyles: 'mt-3 mb-6',
		buttonStyles:
			'w-[17.1875rem] text-xxl lg:w-[28rem] lg:text-5xl xl:w-[34.6875rem]',
		paymentMethodWrapperStyles: 'flex flex-col gap-3 items-center lg:mt-6',
		paymentMethodTextStyles:
			'font-highlight font-bold text-neutral-100 lg:text-lg',
	},
});

const makeStyles = styles();

export const classNames = {
	wrapperMobileStyles: makeStyles.wrapperMobileStyles(),
	wrapperDesktopStyles: makeStyles.wrapperDesktopStyles(),
	imageStyles: makeStyles.imageStyles(),
	headingStyles: makeStyles.headingStyles(),
	priceWrapperStyles: makeStyles.priceWrapperStyles(),
	originalPriceStyles: makeStyles.originalPriceStyles(),
	originalPriceStrongStyles: makeStyles.originalPriceStrongStyles(),
	salePriceStrongStyles: makeStyles.salePriceStrongStyles(),
	anchorButtonStyles: makeStyles.anchorButtonStyles(),
	buttonStyles: makeStyles.buttonStyles(),
	paymentMethodWrapperStyles: makeStyles.paymentMethodWrapperStyles(),
	paymentMethodTextStyles: makeStyles.paymentMethodTextStyles(),
};
