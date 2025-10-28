import { render, screen } from '@testing-library/react';

import './helpers/test/mock';

import { previewSliderMock } from './PreviewSlider.mock';

import { PreviewSlider } from '.';

const { getByTestId, getAllByTestId } = screen;

const mock = previewSliderMock.items.slice(0, 1);

describe('<PreviewSlider />', () => {
	beforeEach(() => render(<PreviewSlider items={mock} />));

	it('should render SliderWrapper', () => {
		const sliderWrapper = getByTestId('mock-slider-wrapper');

		expect(sliderWrapper).toBeInTheDocument();
	});

	it('should render correct SliderItemWrapper length', () => {
		const sliderItemWrapper = getAllByTestId('mock-slider-item-wrapper');

		expect(sliderItemWrapper).toHaveLength(mock.length);
	});

	it('should render LightboxWrapper', () => {
		const lightboxWrapper = getByTestId('mock-lightbox-wrapper');

		expect(lightboxWrapper).toBeInTheDocument();
	});

	it('should render LightboxItemWrapper', () => {
		const lightboxItemWrapper = getByTestId('mock-lightbox-item-wrapper');

		expect(lightboxItemWrapper).toBeInTheDocument();
	});

	it('should render correct Image length', () => {
		const imagens = getAllByTestId('mock-image');

		expect(imagens).toHaveLength(mock.length);
	});
});
