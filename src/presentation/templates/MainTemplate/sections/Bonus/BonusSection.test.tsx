import { render, screen } from '@testing-library/react';

import { bonusSectionMock as mock } from './BonusSection.mock';

import { BonusSection } from '.';

jest.mock('@/presentation/components/organisms/BonusCardSlider', () => ({
	BonusCardSlider: () => <div data-testid="mock-bonus-card-slider" />,
}));

describe('<BonusSection>', () => {
	it('should contain correct section id', () => {
		const { container } = render(<BonusSection {...mock} />);

		const section = container.getElementsByTagName('section')[0];

		expect(section).toHaveAttribute('id', 'bonus');
	});

	it('should render section heading', () => {
		render(<BonusSection {...mock} />);

		const heading = screen.getByRole('heading', { name: mock.heading });

		expect(heading).toBeInTheDocument();
	});

	it('should render BonusCardSlider component', () => {
		render(<BonusSection {...mock} />);

		const bonusCardSlider = screen.getByTestId('mock-bonus-card-slider');

		expect(bonusCardSlider).toBeInTheDocument();
	});
});
