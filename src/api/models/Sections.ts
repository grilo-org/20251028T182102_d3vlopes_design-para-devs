import {
	AuthorSection,
	BonusSection,
	ChaptersSection,
	CheckoutSection,
	FaqSection,
	Footer,
	IntroSection,
	PreviewSection,
	ProjectSection,
	RememberCheckoutSection,
} from '../generated/graphql';

import {
	AccordionAPI,
	BonusAPI,
	ButtonAPI,
	ImageAPI,
	PaymentIconAPI,
	PreviewAPI,
	RichTextAPI,
	SocialAPI,
	StatAPI,
} from './_barrel';

export type IntroAPI = Omit<IntroSection, 'stage' | 'id' | 'stats'> & {
	stats: StatAPI[];
};

export type ChaptersSectionAPI = Omit<
	ChaptersSection,
	'stage' | 'chapters' | 'id'
> & {
	chapters: AccordionAPI[];
};

export type AuthorSectionAPI = Omit<
	AuthorSection,
	'id' | 'stage' | 'photo' | 'socials'
> & {
	photo: ImageAPI;
	socials: SocialAPI[];
};

export type PreviewSectionAPI = Omit<
	PreviewSection,
	'id' | 'stage' | 'previews'
> & {
	previews: PreviewAPI[];
};

export type CheckoutSectionAPI = Pick<
	CheckoutSection,
	'originalPrice' | 'salePrice' | 'sectionID' | 'title'
> & {
	button: ButtonAPI;
	image: ImageAPI;
	icons: PaymentIconAPI[];
};

export type ProjectSectionAPI = Pick<
	ProjectSection,
	'sectionID' | 'title' | 'videoURL' | 'description'
> & {
	videoThumbnail: ImageAPI;
};

export type BonusSectionAPI = Pick<BonusSection, 'sectionID' | 'title'> & {
	bonus: BonusAPI[];
};

export type RememberCheckoutSectionAPI = Pick<
	RememberCheckoutSection,
	'sectionID' | 'buttonText'
> &
	Omit<CheckoutSectionAPI, 'image' | 'button' | 'title'> & {
		title: RichTextAPI;
		buttonTarget: string;
	};

export type FaqSectionAPI = Pick<FaqSection, 'sectionID' | 'title'> & {
	questions: AccordionAPI[];
};

export type FooterAPI = Pick<Footer, 'authorCopyright'>;
