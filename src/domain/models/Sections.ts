import {
	AccordionModel,
	BonusModel,
	ImageModel,
	PaymentIconModel,
	PreviewModel,
	SectionModel,
	SocialIconModel,
	StatsModel,
	ThumbnailModel,
	VideoModel,
} from './_barrel';

type VideoProps = ThumbnailModel & VideoModel;

export interface IntroSectionModel extends SectionModel {
	stats: StatsModel[];
}

export interface ChaptersSectionModel extends SectionModel {
	chapters: AccordionModel[];
}

export interface AuthorSectionModel extends SectionModel {
	id: string;
	name: string;
	expertise: string;
	avatar: ImageModel;
	socials: SocialIconModel[];
	description: string;
}

export interface PreviewSectionModel extends SectionModel {
	previews: PreviewModel[];
}

export interface CheckoutSectionModel extends SectionModel {
	image: ImageModel;
	originalPrice: string;
	salePrice: string;
	button: {
		text: string;
		href: string;
	};
	icons: PaymentIconModel[];
}

export interface ProjectSectionModel extends SectionModel {
	description: string;
	video: VideoProps;
}

export interface BonusSectionModel extends SectionModel {
	bonus: BonusModel[];
}

export type RememberCheckoutSectionModel = SectionModel &
	Omit<CheckoutSectionModel, 'image'>;

export interface FaqSectionModel extends SectionModel {
	questions: AccordionModel[];
}
