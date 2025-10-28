import { styleWrapper } from '@/libs/styles/tailwind-variants';

export const styles = styleWrapper({
	base: 'font-heading inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ',
	variants: {
		variant: {
			fill: 'bg-gradient-primary rounded-[8px] py-6 text-complementary-white font-bold tracking-wider',
			ghost: 'bg-transparent text-lg text-neutral-50 md:text-xxl',
		},
	},
	defaultVariants: {
		variant: 'fill',
	},
});
