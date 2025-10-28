import { render, screen } from '@testing-library/react';

import { questionsAccordionMock as mock } from './QuestionsAccordion.mock';

import { QuestionsAccordion } from '.';

jest.mock('@/presentation/components/molecules/Accordion', () => ({
	Accordion: () => {
		return <div data-testid="mock-accordion" />;
	},
}));

describe('<QuestionsAccordion />', () => {
	it('should render correct Accordion length', () => {
		render(<QuestionsAccordion items={mock.items} />);

		const accordions = screen.getAllByTestId('mock-accordion');

		expect(accordions).toHaveLength(mock.items.length);
	});
});
