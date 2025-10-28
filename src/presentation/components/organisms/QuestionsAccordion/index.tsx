'use client';

import { AccordionModel } from '@/domain/models/Accordion';

import { Accordion } from '@/presentation/components/molecules/Accordion';

export interface QuestionsAccordionProps {
	items: AccordionModel[];
}

export const QuestionsAccordion = ({ items }: QuestionsAccordionProps) => {
	return (
		<div>
			{items.map((item) => {
				return <Accordion key={item.id} {...item} />;
			})}
		</div>
	);
};
