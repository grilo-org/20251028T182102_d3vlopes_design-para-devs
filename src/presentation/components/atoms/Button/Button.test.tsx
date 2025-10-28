import { screen } from '@testing-library/react';

const { queryByRole } = screen;

import { ButtonRender, makeComponent } from './helpers/test';

describe('<Button />', () => {
	it('should render button', () => {
		const { component } = makeComponent();

		expect(component).toBeInTheDocument();
	});

	it('should render with fill variant by default', () => {
		const { component } = makeComponent();

		expect(component).toHaveClass('bg-gradient-primary');
	});

	it('should render with ghost variant', () => {
		const { component } = makeComponent(ButtonRender.GHOST);

		expect(component).toHaveClass('bg-transparent');
	});

	it('should render with custom class', () => {
		const { component } = makeComponent(ButtonRender.CUSTOM_CLASS);

		expect(component).toHaveClass('custom-class');
	});

	it('should render as anchor element', () => {
		const { component } = makeComponent(ButtonRender.AS_ANCHOR);

		const button = queryByRole('button');

		expect(component).toBeInTheDocument();
		expect(button).not.toBeInTheDocument();
	});
});
