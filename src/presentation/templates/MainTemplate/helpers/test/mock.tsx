import { MockDataTestID } from './mockDataTestID';

jest.mock('@/presentation/components/molecules/Hero', () => ({
	Hero: () => {
		return <div data-testid={MockDataTestID.HERO} />;
	},
}));

jest.mock('@/presentation/templates/MainTemplate/sections/Intro', () => ({
	IntroSection: () => {
		return <div data-testid={MockDataTestID.INTRO_SECTION} />;
	},
}));

jest.mock('@/presentation/templates/MainTemplate/sections/Chapters', () => ({
	ChaptersSection: () => {
		return <div data-testid={MockDataTestID.CHAPTERS_SECTION} />;
	},
}));

jest.mock('@/presentation/templates/MainTemplate/sections/Author', () => ({
	AuthorSection: () => {
		return <div data-testid={MockDataTestID.AUTHOR_SECTION} />;
	},
}));

jest.mock('@/presentation/templates/MainTemplate/sections/Preview', () => ({
	PreviewSection: () => {
		return <div data-testid={MockDataTestID.PREVIEW_SECTION} />;
	},
}));

jest.mock('@/presentation/templates/MainTemplate/sections/Checkout', () => ({
	CheckoutSection: () => {
		return <div data-testid={MockDataTestID.CHECKOUT_SECTION} />;
	},
}));

jest.mock('@/presentation/templates/MainTemplate/sections/Project', () => ({
	ProjectSection: () => {
		return <div data-testid={MockDataTestID.PROJECT_SECTION} />;
	},
}));

jest.mock('@/presentation/templates/MainTemplate/sections/Bonus', () => ({
	BonusSection: () => {
		return <div data-testid={MockDataTestID.BONUS_SECTION} />;
	},
}));

jest.mock(
	'@/presentation/templates/MainTemplate/sections/RememberCheckout',
	() => ({
		RememberCheckoutSection: () => {
			return <div data-testid={MockDataTestID.REMEMBER_CHECKOUT_SECTION} />;
		},
	}),
);

jest.mock('@/presentation/templates/MainTemplate/sections/Faq', () => ({
	FaqSection: () => {
		return <div data-testid={MockDataTestID.FAQ_SECTION} />;
	},
}));

jest.mock('@/presentation/components/molecules/Footer', () => ({
	Footer: () => {
		return <div data-testid={MockDataTestID.FOOTER} />;
	},
}));
