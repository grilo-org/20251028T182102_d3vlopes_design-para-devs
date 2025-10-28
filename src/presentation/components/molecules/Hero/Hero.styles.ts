import { styleWrapper } from '@/libs/styles/tailwind-variants';

const styles = styleWrapper({
	slots: {
		wrapperStyles:
			'relative w-full bg-hero-mobile bg-cover bg-center h-[74.0344rem] pt-[7.0625rem] md:h-[64rem] lg:bg-hero-desktop lg:h-[36.25rem] min-[1520px]:bg-[center_top_-10rem]',
		descriptionStyles:
			'mt-4 font-body text-2xl text-center text-neutral-50 w-[21.4375rem] md:w-[38rem] lg:w-[34rem] lg:text-left xl:w-[46.9375rem]',
		imageStyles:
			'relative z-10 w-[15.3125rem] h-[20.9375rem] mt-10 lg:top-[-80px] lg:left-[-5px] lg:w-[24.1663rem] lg:h-[35.2319rem] lg:mt-0 min-[1100px]:left-[25px] xl:top-[-95px] xl:left-0',
		buttonsWrapperStyles:
			'flex flex-col items-center justify-center gap-8 mt-11 w-full lg:justify-start lg:mt-8 lg:flex-row xl:w-auto',
		buttonPrimaryMobileStyles: 'w-full max-w-[21.4375rem] text-lg',
		buttonPrimaryDesktopStyles: 'w-[12.5rem] text-lg',
		wrapperDesktopStyles:
			'hidden lg:px-[5rem] lg:grid lg:grid-cols-[1fr_1fr] lg:max-w-[78.4287rem] lg:my-0 lg: mx-auto 2xl:px-0',
		wrapperMobileStyles: 'flex flex-col items-center px-4 w-full lg:hidden',
		shapeStyles:
			'hidden lg:block lg:w-full lg:bottom-[-75px] lg:h-[9.5381rem] lg:absolute xl:bottom-[-65px]',
	},
});

const makeStyles = styles();

export const classNames = {
	wrapper: makeStyles.wrapperStyles(),
	description: makeStyles.descriptionStyles(),
	bookImage: makeStyles.imageStyles(),
	buttonsWrapperStyles: makeStyles.buttonsWrapperStyles(),
	buttonPrimaryMobileStyles: makeStyles.buttonPrimaryMobileStyles(),
	buttonPrimaryDesktopStyles: makeStyles.buttonPrimaryDesktopStyles(),
	wrapperDesktopStyles: makeStyles.wrapperDesktopStyles(),
	wrapperMobileStyles: makeStyles.wrapperMobileStyles(),
	shapeStyles: makeStyles.shapeStyles(),
};
