'use client';

import { AccordionModel } from '@/domain/models/Accordion';

import { ScrollArea } from '@/libs/components/ui/shadcn/ScrollArea';

import { AccordionPartial } from './partials/AccordionPartial';

export interface ChaptersAccordionProps {
	items: AccordionModel[];
}

export const ChaptersAccordion = ({ items }: ChaptersAccordionProps) => {
	return (
		<ScrollArea className="h-[46rem] md:h-[42rem]">
			{items.map(AccordionPartial)}
		</ScrollArea>
	);
};
