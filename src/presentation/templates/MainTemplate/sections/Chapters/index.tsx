import { ChaptersSectionModel } from '@/domain/models/Sections';

import { Heading } from '@/presentation/components/atoms/Heading';
import { ChaptersAccordion } from '@/presentation/components/organisms/ChaptersAccordion';

export type ChaptersSectionProps = ChaptersSectionModel;

export const ChaptersSection = ({
	id,
	heading,
	chapters,
}: ChaptersSectionProps) => {
	return (
		<section id={id}>
			<Heading>
				<h2 className="text-center mb-6 font-heading font-bold text-6xl md:text-9xl md:mb-14">
					{heading}
				</h2>
			</Heading>

			<ChaptersAccordion items={chapters} />
		</section>
	);
};
