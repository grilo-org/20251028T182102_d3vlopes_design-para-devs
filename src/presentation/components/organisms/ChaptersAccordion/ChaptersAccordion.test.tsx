import { render, screen } from '@testing-library/react';

import { chaptersAccordionMock as mock } from './ChaptersAccordion.mock';

import { ChaptersAccordion } from '.';

const { getAllByTestId, getByTestId } = screen;

jest.mock('@/presentation/components/molecules/Accordion', () => ({
	Accordion: () => {
		return <div data-testid="mock-accordion" />;
	},
}));

jest.mock('@/libs/components/ui/shadcn/ScrollArea', () => ({
	ScrollArea: ({ children }: { children: React.ReactNode }) => {
		return <div data-testid="mock-scroll-area">{children}</div>;
	},
}));

describe('<ChaptersAccordion />', () => {
	beforeEach(() => render(<ChaptersAccordion {...mock} />));

	it('should render correct Accordion length', () => {
		const accordions = getAllByTestId('mock-accordion');

		expect(accordions).toHaveLength(mock.items.length);
	});

	it('should render ScrollArea component', () => {
		const scrollArea = getByTestId('mock-scroll-area');

		expect(scrollArea).toBeInTheDocument();
	});
});
