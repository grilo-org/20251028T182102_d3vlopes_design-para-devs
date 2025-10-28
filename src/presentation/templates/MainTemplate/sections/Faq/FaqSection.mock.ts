import { questionsAccordionMock } from '@/presentation/components/organisms/QuestionsAccordion/QuestionsAccordion.mock';

import { FaqSectionProps } from '.';

export const faqSectionMock: FaqSectionProps = {
	id: 'faq',
	heading: 'Perguntas frequentes',
	questions: questionsAccordionMock.items,
};
