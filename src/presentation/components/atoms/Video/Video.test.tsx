import { render, screen } from '@testing-library/react';

import { videoMock as mock } from './Video.mock';

import { Video } from '.';

const { getByTestId } = screen;

describe('<Video />', () => {
	beforeEach(() => render(<Video className="custom-class" {...mock} />));

	it('should render video with controls', () => {
		const video = getByTestId('video');

		expect(video).toHaveAttribute('controls');
	});

	it('should video auto play', () => {
		const video = getByTestId('video');

		expect(video).toHaveAttribute('autoPlay');
	});

	it('should render source with correct src value', () => {
		const source = getByTestId('video-source');

		expect(source).toHaveAttribute('src', mock.videoURL);
	});

	it('should render with custom class', () => {
		const video = getByTestId('video');

		expect(video).toHaveClass('custom-class');
	});
});
