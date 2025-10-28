import { render, screen } from '@testing-library/react';

import { previewSliderMock } from '@/presentation/components/organisms/PreviewSlider/PreviewSlider.mock';

import { PreviewSection, PreviewSectionProps } from '.';

const { getByTestId, getByRole } = screen;

jest.mock('@/presentation/components/organisms/PreviewSlider', () => ({
	PreviewSlider: () => <div data-testid="mock-preview-slider" />,
}));

export const mock: PreviewSectionProps = {
	id: 'preview',
	heading: 'Preview',
	previews: previewSliderMock.items.slice(0, 1),
};

describe('<PreviewSection />', () => {
	it('should contain correct section id', () => {
		const { container } = render(<PreviewSection {...mock} />);

		const section = container.getElementsByTagName('section')[0];

		expect(section).toHaveAttribute('id', mock.id);
	});

	it('should render section heading', () => {
		render(<PreviewSection {...mock} />);

		const heading = getByRole('heading', { name: 'Preview' });

		expect(heading).toBeInTheDocument();
	});

	it('should render PreviewSlider', () => {
		render(<PreviewSection {...mock} />);

		const previewSlider = getByTestId('mock-preview-slider');

		expect(previewSlider).toBeInTheDocument();
	});
});
