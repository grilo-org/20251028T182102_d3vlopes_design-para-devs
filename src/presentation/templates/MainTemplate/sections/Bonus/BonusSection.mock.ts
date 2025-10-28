import { bonusCardSliderMock } from '@/presentation/components/organisms/BonusCardSlider/BonusCardSlider.mock';

import { BonusSectionProps } from '.';

export const bonusSectionMock: BonusSectionProps = {
	id: 'bonus',
	heading: 'Bônus',
	bonus: bonusCardSliderMock.items,
};
