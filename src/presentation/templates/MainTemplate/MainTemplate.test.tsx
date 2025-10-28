import { render, screen } from '@testing-library/react';

import './helpers/test/mock';

import { MockDataTestID } from './helpers/test/mockDataTestID';

import { mainTemplateMock as mock } from './MainTemplate.mock';

import { MainTemplate } from '.';

const { getByTestId } = screen;

describe('<MainTemplate />', () => {
	beforeEach(() => render(<MainTemplate {...mock} />));

	it('should render Hero', () => {
		const hero = getByTestId(MockDataTestID.HERO);

		expect(hero).toBeInTheDocument();
	});

	it('should render intro section', () => {
		const introSection = getByTestId(MockDataTestID.INTRO_SECTION);

		expect(introSection).toBeInTheDocument();
	});

	it('should render chapters section', () => {
		const chaptersSection = getByTestId(MockDataTestID.CHAPTERS_SECTION);

		expect(chaptersSection).toBeInTheDocument();
	});

	it('should render author section', () => {
		const authorSection = getByTestId(MockDataTestID.AUTHOR_SECTION);

		expect(authorSection).toBeInTheDocument();
	});

	it('should render preview section', () => {
		const previewSection = getByTestId(MockDataTestID.PREVIEW_SECTION);

		expect(previewSection).toBeInTheDocument();
	});

	it('should render checkout section', () => {
		const checkoutSection = getByTestId(MockDataTestID.CHECKOUT_SECTION);

		expect(checkoutSection).toBeInTheDocument();
	});

	it('should render project section', () => {
		const projectSection = getByTestId(MockDataTestID.PROJECT_SECTION);

		expect(projectSection).toBeInTheDocument();
	});

	it('should render bonus section', () => {
		const bonusSection = getByTestId(MockDataTestID.BONUS_SECTION);

		expect(bonusSection).toBeInTheDocument();
	});

	it('should render remember checkout section', () => {
		const rememberCheckoutSection = getByTestId(
			MockDataTestID.REMEMBER_CHECKOUT_SECTION,
		);

		expect(rememberCheckoutSection).toBeInTheDocument();
	});

	it('should render faq section', () => {
		const faqSection = getByTestId(MockDataTestID.FAQ_SECTION);

		expect(faqSection).toBeInTheDocument();
	});

	it('should render Footer', () => {
		const footer = getByTestId(MockDataTestID.FOOTER);

		expect(footer).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const { container } = render(<MainTemplate {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
