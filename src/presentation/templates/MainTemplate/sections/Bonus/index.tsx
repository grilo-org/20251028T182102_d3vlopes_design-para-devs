import { BonusSectionModel } from '@/domain/models/Sections';

import { BonusCardSlider } from '@/presentation/components/organisms/BonusCardSlider';

import { Heading } from '@/presentation/components/atoms/Heading';

export type BonusSectionProps = BonusSectionModel;

export const BonusSection = ({ id, heading, bonus }: BonusSectionProps) => {
	return (
		<section id={id}>
			<Heading>
				<h2 className="mb-6 font-heading font-bold text-6xl text-center md:text-9xl md:mb-14">
					{heading}
				</h2>
			</Heading>

			<BonusCardSlider items={bonus} />
		</section>
	);
};
