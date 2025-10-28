import { styleWrapper } from '@/libs/styles/tailwind-variants';

const styles = styleWrapper({
	slots: {
		wrapperStyles:
			'flex flex-col justify-center items-center w-[11.125rem] min-w-[11.125rem] h-[9.1875rem] bg-background-400 rounded-[4px] md:px-8 md:w-max md:h-[12.9375rem]',
		numberStyles:
			'inline-block text-transparent bg-clip-text bg-gradient-primary font-highlight font-bold text-10xl leading-none md:text-14xl md:leading-none',
		textStyles: 'font-highlight text-lg text-neutral-50',
	},
});

const makeStyles = styles();

export const classNames = {
	wrapperStyles: makeStyles.wrapperStyles(),
	numberStyles: makeStyles.numberStyles(),
	textStyles: makeStyles.textStyles(),
};
