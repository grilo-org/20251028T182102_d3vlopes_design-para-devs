import { render, screen } from '@testing-library/react';

import { Image, ImageProps } from '.';

const { getByRole } = screen;

const mock: ImageProps = {
	src: 'https://www.cdn.com/image.png',
	alt: 'Loren ipsum dolor',
	width: 500,
	height: 500,
};

describe('<Image />', () => {
	it('should render by default', () => {
		render(<Image {...mock} />);

		const image = getByRole('img', { name: 'Loren ipsum dolor' });

		expect(image).toBeInTheDocument();
	});
});
