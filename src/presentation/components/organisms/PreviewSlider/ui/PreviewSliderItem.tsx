import { PreviewModel } from '@/domain/models/Preview';

import { Image } from '@/presentation/components/atoms/Image';

import { SliderItemWrapper } from '@/libs/components/ui/splidejs/Slider';

import { LightboxItemWrapper } from '@/libs/components/ui/react-photoswipe-gallery';

import type { SliderSizesType } from '../hooks/usePreviewSlider';

export interface PreviewSliderItemProps {
	item: PreviewModel;
	sliderSizes: SliderSizesType;
}

export const PreviewSliderItem = ({
	item,
	sliderSizes,
}: PreviewSliderItemProps) => {
	return (
		<SliderItemWrapper key={item.id}>
			<LightboxItemWrapper
				original={item.src}
				thumbnail={item.src}
				width={sliderSizes.width}
				height={sliderSizes.height}
				wrapperClassName="relative w-full h-[24.0625rem] md:h-[32.125rem]"
			>
				<Image fill src={item.src} alt={item.alt} />
			</LightboxItemWrapper>
		</SliderItemWrapper>
	);
};
