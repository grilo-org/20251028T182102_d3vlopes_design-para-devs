import { chaptersAccordionMock } from '@/presentation/components/organisms/ChaptersAccordion/ChaptersAccordion.mock';

import { ChaptersSectionProps } from '.';

export const chaptersSectionMock: ChaptersSectionProps = {
	id: 'chapters',
	heading: 'Veja o que tem dentro',
	chapters: chaptersAccordionMock.items,
};
