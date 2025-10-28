import { FaqSectionModel } from '@/domain/models/Sections';

import { Heading } from '@/presentation/components/atoms/Heading';

import { QuestionsAccordion } from '@/presentation/components/organisms/QuestionsAccordion';

export type FaqSectionProps = FaqSectionModel;

export const FaqSection = ({ id, heading, questions }: FaqSectionProps) => {
	return (
		<section id={id}>
			<Heading>
				<h2 className="text-center mb-6 font-heading font-bold text-6xl md:text-9xl md:mb-14">
					{heading}
				</h2>
			</Heading>

			<QuestionsAccordion items={questions} />
		</section>
	);
};
