import { BonusModel } from '@/domain/models/Bonus';

import { SliderItemWrapper } from '@/libs/components/ui/splidejs/Slider';

import { BonusCard } from '@/presentation/components/molecules/BonusCard';

export const BonusCardPartial = (item: BonusModel) => {
	return (
		<SliderItemWrapper key={item.id}>
			<BonusCard {...item} />
		</SliderItemWrapper>
	);
};
