import { act, fireEvent, render, screen } from '@testing-library/react';

import { videoThumbnailMock as mock } from './VideoThumbnail.mock';

import { VideoThumbnail } from '.';

const { getByRole, getByTestId } = screen;

describe('<VideoThumbnail />', () => {
	beforeEach(() => render(<VideoThumbnail {...mock} />));

	it('should render Thumbnail component', () => {
		const thumbnail = getByRole('img', { name: mock.image.alt });

		expect(thumbnail).toBeInTheDocument();
	});

	it('should render Video on click Thumbnail button', () => {
		const button = getByRole('button');

		fireEvent.click(button);

		act(() => {
			const video = getByTestId('video');

			expect(video).toBeInTheDocument();
		});
	});
});
