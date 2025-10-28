import { screen } from '@testing-library/react';

import { HeadingRender, makeComponent } from './helpers/test';

const { getByRole, getByText, getByTestId, queryByTestId } = screen;

describe('<Heading />', () => {
	it('should render as H2', () => {
		const { heading } = makeComponent(HeadingRender.AS_H2);

		expect(heading.tagName.toLowerCase()).toBe('h2');
	});

	it('should not render heading wrapper if children is provide', () => {
		makeComponent(HeadingRender.AS_H2);

		const headingWrapper = queryByTestId('heading-wrapper');

		expect(headingWrapper).not.toBeInTheDocument();
	});

	it('should render heading wrapper if children is not provide', () => {
		makeComponent(HeadingRender.AS_HTML);

		const headingWrapper = getByTestId('heading-wrapper');

		expect(headingWrapper).toBeInTheDocument();
	});

	it('should render as HTML provide', () => {
		makeComponent(HeadingRender.AS_HTML);

		const heading = getByRole('heading');
		const strong = getByText('além do código');

		expect(heading.tagName.toLowerCase()).toBe('h1');
		expect(strong).toBeInTheDocument();
	});

	it('should heading wrapper contain custom class', () => {
		makeComponent(HeadingRender.AS_HTML_WITH_CUSTOM_CLASS);

		const headingWrapper = getByTestId('heading-wrapper');

		expect(headingWrapper).toHaveClass('custom-class');
	});
});
