import { render, screen } from '@testing-library/react';

import { faqSectionMock as mock } from './FaqSection.mock';

import { FaqSection } from '.';

jest.mock('@/presentation/components/organisms/QuestionsAccordion', () => ({
	QuestionsAccordion: () => <div data-testid="mock-questions-accordion" />,
}));

describe('<FaqSection />', () => {
	it('should contain correct section id', () => {
		const { container } = render(<FaqSection {...mock} />);

		const section = container.getElementsByTagName('section')[0];

		expect(section).toHaveAttribute('id', mock.id);
	});

	it('should render section heading', () => {
		render(<FaqSection {...mock} />);

		const heading = screen.getByRole('heading', {
			name: mock.heading,
		});

		expect(heading).toBeInTheDocument();
	});

	it('should render QuestionsAccordion component', () => {
		render(<FaqSection {...mock} />);

		const questionsAccordion = screen.getByTestId('mock-questions-accordion');

		expect(questionsAccordion).toBeInTheDocument();
	});
});
