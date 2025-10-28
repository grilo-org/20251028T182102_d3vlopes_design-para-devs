import { styleWrapper } from '@/libs/styles/tailwind-variants';

const style = styleWrapper({
	slots: {
		wrapperStyles: 'flex flex-col items-center justify-center',
		headingStyles:
			'prose-h2:text-center w-[21.4375rem] prose-h2:text-[1.625rem] prose-h2:text-complementary-white prose-h2:uppercase prose-h2:leading-[2.375rem] lg:w-[62rem] lg:prose-h2:text-6xl',
		priceWrapperStyles:
			'flex flex-col items-center font-highlight font-bold my-8',
		originalPriceStyles: 'text-lg leading-[1.3613rem] text-complementary-red',
		originalPriceStrongStyles: 'line-through font-bold',
		salePriceStyles: 'text-2xl leading-[1.8156rem] text-complementary-white',
		salePriceStrongStyles:
			'text-[3rem] leading-[3.6306rem] text-complementary-green',
		buttonStyles:
			'w-[21.4375rem] text-xxl lg:w-[28rem] lg:text-5xl xl:w-[36.8125rem]',
		paymentMethodWrapperStyles: 'flex flex-col gap-3 items-center mt-6',
		paymentMethodTextStyles:
			'font-highlight font-bold text-neutral-100 mb-3 lg:text-lg',
	},
});

const makeStyles = style();

export const classNames = {
	wrapperStyles: makeStyles.wrapperStyles(),
	headingStyles: makeStyles.headingStyles(),
	priceWrapperStyles: makeStyles.priceWrapperStyles(),
	originalPriceStyles: makeStyles.originalPriceStyles(),
	originalPriceStrongStyles: makeStyles.originalPriceStrongStyles(),
	salePriceStyles: makeStyles.salePriceStyles(),
	salePriceStrongStyles: makeStyles.salePriceStrongStyles(),
	buttonStyles: makeStyles.buttonStyles(),
	paymentMethodWrapperStyles: makeStyles.paymentMethodWrapperStyles(),
	paymentMethodTextStyles: makeStyles.paymentMethodTextStyles(),
};
