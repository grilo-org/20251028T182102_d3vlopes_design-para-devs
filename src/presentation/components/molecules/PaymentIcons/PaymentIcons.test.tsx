import { render, screen } from '@testing-library/react';

import { paymentIconsMock as mock } from './PaymentIcons.mock';

import { PaymentIcons } from '.';

describe('<PaymentIcons />', () => {
	beforeEach(() => render(<PaymentIcons icons={mock.icons} />));

	it('should render correct Image length', () => {
		const imagens = screen.getAllByRole('img');

		expect(imagens).toHaveLength(mock.icons.length);
	});

	it('should render payment method name', () => {
		for (const icon of mock.icons) {
			const paymentMethodName = screen.getByText(icon.name);

			expect(paymentMethodName).toBeInTheDocument();
		}
	});

	it('should render title icons', () => {
		for (const icon of mock.icons) {
			const iconTitle = screen.getByTitle(icon.name);

			expect(iconTitle).toBeInTheDocument();
		}
	});

	it('should match snapshot', () => {
		const { container } = render(<PaymentIcons icons={mock.icons} />);

		expect(container).toMatchSnapshot();
	});
});
