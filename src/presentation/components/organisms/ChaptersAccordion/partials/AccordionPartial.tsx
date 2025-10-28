import { AccordionModel } from '@/domain/models/Accordion';

import { Accordion } from '@/presentation/components/molecules/Accordion';

export const AccordionPartial = ({ ...props }: AccordionModel) => {
	return <Accordion key={props.id} {...props} />;
};
