import { footerMock } from '@/presentation/components/molecules/Footer/Footer.mock';
import { heroMock } from '@/presentation/components/molecules/Hero/Hero.mock';

import { authorSectionMock } from './sections/Author/AuthorSection.mock';
import { bonusSectionMock } from './sections/Bonus/BonusSection.mock';
import { chaptersSectionMock } from './sections/Chapters/ChaptersSection.mock';
import { checkoutSectionMock } from './sections/Checkout/CheckoutSection.mock';
import { faqSectionMock } from './sections/Faq/FaqSection.mock';
import { introSectionMock } from './sections/Intro/IntroSection.mock';
import { previewSectionMock } from './sections/Preview/PreviewSection.mock';
import { projectSectionMock } from './sections/Project/ProjectSection.mock';
import { rememberCheckoutSectionMock } from './sections/RememberCheckout/RememberCheckoutSection.mock';

import { MainTemplateProps } from '.';

export const mainTemplateMock: MainTemplateProps = {
	hero: heroMock,
	intro: introSectionMock,
	chapters: chaptersSectionMock,
	author: authorSectionMock,
	preview: previewSectionMock,
	checkout: checkoutSectionMock,
	project: projectSectionMock,
	bonus: bonusSectionMock,
	rememberCheckout: rememberCheckoutSectionMock,
	faq: faqSectionMock,
	footer: footerMock,
};
