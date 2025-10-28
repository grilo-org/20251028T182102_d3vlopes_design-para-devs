import { useMediaQuery } from '@/presentation/hooks/useMediaQuery';

import { getTailwindTheme } from '@/utils/getTailwindTheme';

export interface SliderSizesType {
	width: string;
	height: string;
}

export const usePreviewSlider = () => {
	const { screens } = getTailwindTheme();

	const isDesktop = useMediaQuery(screens.lg);

	const sliderSizes: SliderSizesType = {
		width: isDesktop ? '504' : '300',
		height: isDesktop ? '648' : '450',
	};

	return {
		sliderSizes,
	};
};
