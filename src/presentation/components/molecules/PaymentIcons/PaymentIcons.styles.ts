import { styleWrapper } from '@/libs/styles/tailwind-variants';

export const styles = styleWrapper({
	slots: {
		paymentIconPartialWrapperStyles: 'flex items-center gap-2',
		paymentIconPartialImageStyles:
			'relative w-[2.1875rem] h-[2.1875rem] md:w-[2.8125rem] md:h-[2.8125rem]',
		paymentIconPartialTextStyles:
			'font-body font-semibold text-sm inline-block text-transparent bg-clip-text bg-gradient-primary md:text-lg',
	},
});

const makeStyles = styles();

export const classNames = {
	paymentIconPartialWrapperStyles: makeStyles.paymentIconPartialWrapperStyles(),
	paymentIconPartialImageStyles: makeStyles.paymentIconPartialImageStyles(),
	paymentIconPartialTextStyles: makeStyles.paymentIconPartialTextStyles(),
};
