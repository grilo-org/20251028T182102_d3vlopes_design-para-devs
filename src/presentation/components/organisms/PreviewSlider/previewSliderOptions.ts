import { SliderWrapperOptionsProps } from '@/libs/components/ui/splidejs/Slider';

export const previewSliderOptions: SliderWrapperOptionsProps = {
	gap: '2rem',
	fixedWidth: '25rem',
	breakpoints: {
		1024: {
			gap: '1rem',
			fixedWidth: '18.75rem',
		},
	},
};
