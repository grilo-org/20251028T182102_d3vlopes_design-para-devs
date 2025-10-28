import { render, screen } from '@testing-library/react';

import { footerMock as mock } from './Footer.mock';

import { Footer } from '.';

describe('<Footer />', () => {
	it('should render author copyright', () => {
		render(<Footer {...mock} />);

		const authorCopyright = screen.getByText(/© Leandro Lopes/i);

		expect(authorCopyright).toBeInTheDocument();
	});

	it('should render with custom class', () => {
		const { container } = render(<Footer {...mock} className="custom-class" />);

		const footer = container.firstChild;

		expect(footer).toHaveClass('custom-class');
	});
});
