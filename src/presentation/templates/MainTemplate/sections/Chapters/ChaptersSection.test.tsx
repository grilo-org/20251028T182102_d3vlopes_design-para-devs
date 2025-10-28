import { render, screen } from '@testing-library/react';

import { chaptersSectionMock as mock } from './ChaptersSection.mock';

import { ChaptersSection } from '.';

const { getByRole, getByTestId } = screen;

jest.mock('@/presentation/components/organisms/ChaptersAccordion', () => ({
	ChaptersAccordion: () => {
		return <div data-testid="mock-chapters-accordion" />;
	},
}));

describe('<ChaptersSection />', () => {
	beforeEach(() => render(<ChaptersSection {...mock} />));

	it('should contain correct section id', () => {
		const { container } = render(<ChaptersSection {...mock} />);

		const section = container.getElementsByTagName('section')[0];

		expect(section).toHaveAttribute('id', mock.id);
	});

	it('should render section heading', () => {
		const heading = getByRole('heading', { name: mock.heading });

		expect(heading).toBeInTheDocument();
	});

	it('should render ChaptersAccordion component', () => {
		const chaptersAccordion = getByTestId('mock-chapters-accordion');

		expect(chaptersAccordion).toBeInTheDocument();
	});
});
