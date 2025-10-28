import { render, screen } from '@testing-library/react';

import './helpers/test/mock';

import { bonusCardSliderMock as mock } from './BonusCardSlider.mock';

import { BonusCardSlider } from '.';

const { getByTestId, getAllByTestId } = screen;

describe('<BonusCardSlider />', () => {
	beforeEach(() => render(<BonusCardSlider {...mock} />));

	it('should render SliderWrapper', () => {
		const sliderWrapper = getByTestId('mock-slider-wrapper');

		expect(sliderWrapper).toBeInTheDocument();
	});

	it('should render correct SliderItemWrapper length', () => {
		const sliderItemWrapper = getAllByTestId('mock-slider-item-wrapper');

		expect(sliderItemWrapper).toHaveLength(mock.items.length);
	});

	it('should render correct BonusCard length', () => {
		const bonusCards = getAllByTestId('mock-bonus-card');

		expect(bonusCards).toHaveLength(mock.items.length);
	});
});
