'use client';

import { PreviewModel } from '@/domain/models/Preview';

import { LightboxWrapper } from '@/libs/components/ui/react-photoswipe-gallery';

import { SliderWrapper } from '@/libs/components/ui/splidejs/Slider';

import { previewSliderOptions } from './previewSliderOptions';

import { PreviewSliderItem } from './ui/PreviewSliderItem';

import { usePreviewSlider } from './hooks/usePreviewSlider';

export interface PreviewSliderProps {
	items: PreviewModel[];
}

export const PreviewSlider = ({ items }: PreviewSliderProps) => {
	const { sliderSizes } = usePreviewSlider();

	return (
		<div className="pl-4 md:pl-[5rem] xl:pl-[7.7rem]">
			<SliderWrapper options={previewSliderOptions}>
				<LightboxWrapper>
					{items.map((item) => (
						<PreviewSliderItem
							key={item.id}
							sliderSizes={sliderSizes}
							item={item}
						/>
					))}
				</LightboxWrapper>
			</SliderWrapper>
		</div>
	);
};
