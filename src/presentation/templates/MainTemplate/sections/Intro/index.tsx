import { IntroSectionModel } from '@/domain/models/Sections';

import { Heading } from '@/presentation/components/atoms/Heading';

import { StatsCards } from '@/presentation/components/organisms/StatsCards';

export type IntroSectionProps = IntroSectionModel;

export const IntroSection = ({ id, heading, stats }: IntroSectionProps) => {
	return (
		<section id={id} className="mt-20 lg:mt-[13.75rem]">
			<div className="flex flex-col items-center">
				<Heading>
					<h2 className="mb-6 font-heading font-bold text-6xl md:text-9xl md:mb-14">
						{heading}
					</h2>
				</Heading>

				<StatsCards items={stats} />
			</div>
		</section>
	);
};
