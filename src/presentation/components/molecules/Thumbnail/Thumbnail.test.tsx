import { fireEvent, render, screen } from '@testing-library/react';

import { thumbnailMock } from './Thumbnail.mock';

import { Thumbnail, ThumbnailProps } from '.';

const { getByRole, getByLabelText } = screen;

const mock: ThumbnailProps = {
	...thumbnailMock,
	onClickPlayButton: jest.fn(),
};

describe('<Thumbnail />', () => {
	beforeEach(() => {
		render(<Thumbnail {...mock} />);
	});

	it('should render image', () => {
		const image = getByRole('img', { name: mock.image.alt });

		expect(image).toBeInTheDocument();
	});

	it('should render button', () => {
		const button = getByRole('button');

		expect(button).toBeInTheDocument();
	});

	it('should call function on click button', () => {
		const button = getByRole('button');

		fireEvent.click(button);

		expect(mock.onClickPlayButton).toHaveBeenCalled();
	});

	it('should render icon', () => {
		const icon = getByLabelText('Ícone representando o inicio da reprodução');

		expect(icon).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const { container } = render(<Thumbnail {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
