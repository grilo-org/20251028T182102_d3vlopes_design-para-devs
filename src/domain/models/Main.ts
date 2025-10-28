import {
	AuthorSectionModel,
	BonusSectionModel,
	ChaptersSectionModel,
	CheckoutSectionModel,
	FaqSectionModel,
	FooterModel,
	HeroModel,
	IntroSectionModel,
	PreviewSectionModel,
	ProjectSectionModel,
	RememberCheckoutSectionModel,
} from './_barrel';

export interface MainModel {
	hero: HeroModel;
	intro: IntroSectionModel;
	chapters: ChaptersSectionModel;
	author: AuthorSectionModel;
	preview: PreviewSectionModel;
	checkout: CheckoutSectionModel;
	project: ProjectSectionModel;
	bonus: BonusSectionModel;
	rememberCheckout: RememberCheckoutSectionModel;
	faq: FaqSectionModel;
	footer: FooterModel;
}
