import { SliderWrapperOptionsProps } from '@/libs/components/ui/splidejs/Slider';

export const sliderOptions: SliderWrapperOptionsProps = {
	gap: '2rem',
	fixedWidth: '38.25rem',
	breakpoints: {
		767: {
			gap: '1rem',
			fixedWidth: '17rem',
		},
		1024: {
			gap: '1rem',
			fixedWidth: '35rem',
		},
	},
};
