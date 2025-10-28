import { AccordionModel } from '@/domain/models/Accordion';

import { AccordionComposition } from './Accordion.composition';

export type AccordionProps = AccordionModel;

export const Accordion = ({ id, title, content }: AccordionProps) => {
	return (
		<AccordionComposition.Root
			type="single"
			collapsible
			className="px-4 md:pl-[4rem]"
		>
			<AccordionComposition.Item value={id}>
				<AccordionComposition.Title>{title}</AccordionComposition.Title>

				<AccordionComposition.Content data-testid="accordion-content">
					{content}
				</AccordionComposition.Content>
			</AccordionComposition.Item>
		</AccordionComposition.Root>
	);
};
