import { styleWrapper } from '@/libs/styles/tailwind-variants';

export const styles = styleWrapper({
	slots: {
		wrapperStyles:
			'relative flex justify-center items-center h-[14.0625rem] md:h-[24.0413rem]',
		imageStyles: 'rounded-[4px] w-full md:h-[24.0413rem]',
		imageOverlayStyles: 'absolute inset-0 bg-black opacity-80 rounded-[4px]',
		buttonStyles: 'absolute m-auto',
		iconStyles: 'w-12 h-12 md:h-[11.5875rem] md:w-[11.5875rem]',
	},
});

const makeStyles = styles();

export const classNames = {
	wrapperStyles: makeStyles.wrapperStyles(),
	imageStyles: makeStyles.imageStyles(),
	imageOverlayStyles: makeStyles.imageOverlayStyles(),
	buttonStyles: makeStyles.buttonStyles(),
	iconStyles: makeStyles.iconStyles(),
};
