import { tv } from 'tailwind-variants';

const styles = tv({
	slots: {
		wrapperStyles:
			'flex flex-col py-8 rounded-[4px] border border-solid border-background-200 bg-background-400 h-[42.25rem] md:py-14 md:h-[43.125rem]',
		headerStyles: 'flex flex-col items-center',
		iconStyles:
			'w-max-[11.4375rem] min-w-[5.9375rem] h-[5.9375rem] md:w-max-[17.6875rem] md:w-min-[9.0625rem] md:h-[9.0625rem]',
		titleStyles:
			'my-6 text-center font-highlight font-extrabold text-3xl text-complementary-white max-w-[14.0625rem] md:text-6xl md:max-w-[31.6875rem]',
		dividerStyles: 'border border-solid border-background-200',
		contentWrapperStyles: 'px-3 md:pl-6 md:pr-0',
		benefitDescriptionStyles:
			'font-body text-base text-neutral-50 mt-8 mb-6 max-w-max md:max-w-[35.1875rem]',
		benefitTitleStyles:
			'font-body text-base text-neutral-50 font-semibold mb-4 md:text-lg',
		benefitsWrapper: 'flex items-center gap-2',
		benefitsDescription:
			'font-body text-base leading-[1.3619rem] font-bold text-neutral-50 max-w-[12.4375rem] md:max-w-max',
	},
});

const makeStyles = styles();

export const classNames = {
	wrapperStyles: makeStyles.wrapperStyles(),
	headerStyles: makeStyles.headerStyles(),
	iconStyles: makeStyles.iconStyles(),
	titleStyles: makeStyles.titleStyles(),
	dividerStyles: makeStyles.dividerStyles(),
	contentWrapperStyles: makeStyles.contentWrapperStyles(),
	benefitDescriptionStyles: makeStyles.benefitDescriptionStyles(),
	benefitTitleStyles: makeStyles.benefitTitleStyles(),
	benefitsWrapper: makeStyles.benefitsWrapper(),
	benefitsDescription: makeStyles.benefitsDescription(),
};
