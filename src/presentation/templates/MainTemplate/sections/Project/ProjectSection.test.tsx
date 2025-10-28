import { render, screen } from '@testing-library/react';

import { projectSectionMock as mock } from './ProjectSection.mock';

import { ProjectSection } from '.';

jest.mock('@/presentation/components/organisms/VideoThumbnail', () => ({
	VideoThumbnail: () => <div data-testid="mock-video-thumbnail" />,
}));

describe('<ProjectSection />', () => {
	beforeEach(() => render(<ProjectSection {...mock} />));

	it('should contain correct section id', () => {
		const { container } = render(<ProjectSection {...mock} />);

		const section = container.getElementsByTagName('section')[0];

		expect(section).toHaveAttribute('id', mock.id);
	});

	it('should render section heading', () => {
		const heading = screen.getByRole('heading', { name: mock.heading });

		expect(heading).toBeInTheDocument();
	});

	it('should render description', () => {
		const description = screen.getByText(mock.description);

		expect(description).toBeInTheDocument();
	});

	it('should render VideoThumbnail component', () => {
		const videoThumbnail = screen.getByTestId('mock-video-thumbnail');

		expect(videoThumbnail).toBeInTheDocument();
	});
});
