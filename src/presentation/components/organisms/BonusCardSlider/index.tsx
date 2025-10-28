'use client';

import { BonusModel } from '@/domain/models/Bonus';

import { SliderWrapper } from '@/libs/components/ui/splidejs/Slider';

import { sliderOptions } from './sliderOptions';

import { BonusCardPartial } from './partials/BonusCardPartial';

export interface BonusCardSliderProps {
	items: BonusModel[];
}

export const BonusCardSlider = ({ items }: BonusCardSliderProps) => {
	return (
		<div className="pl-4 md:pl-[5rem] xl:pl-[7.7rem]">
			<SliderWrapper options={sliderOptions}>
				{items.map(BonusCardPartial)}
			</SliderWrapper>
		</div>
	);
};
