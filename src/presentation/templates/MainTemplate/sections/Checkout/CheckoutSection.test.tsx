import { render, screen } from '@testing-library/react';

import { checkoutSectionMock as mock } from './CheckoutSection.mock';

import { CheckoutSection } from '.';

const { getByRole, getByText, getByTestId } = screen;

jest.mock('@/presentation/components/molecules/PaymentIcons', () => ({
	PaymentIcons: () => <div data-testid="mock-payment-icons" />,
}));

describe('<CheckoutSection />', () => {
	beforeEach(() => render(<CheckoutSection {...mock} />));

	it('should contain correct section id', () => {
		const { container } = render(<CheckoutSection {...mock} />);

		const section = container.getElementsByTagName('section')[0];

		expect(section).toHaveAttribute('id', mock.id);
	});

	it('should render image', () => {
		const image = getByRole('img', {
			name: mock.image.alt,
		});

		expect(image).toBeInTheDocument();
	});

	it('should render section heading', () => {
		const heading = getByRole('heading', {
			name: mock.heading,
		});

		expect(heading).toBeInTheDocument();
	});

	it('should render original price', () => {
		const originalPrice = getByText(/R\$ 60,00/i);

		expect(originalPrice).toBeInTheDocument();
	});

	it('should render sale price', () => {
		const salePrice = getByText(/R\$ 9,90/i);

		expect(salePrice).toBeInTheDocument();
	});

	it('should render button', () => {
		const button = getByRole('button', { name: mock.button.text });

		expect(button).toBeInTheDocument();
	});

	it('should render anchor with correct href value', () => {
		const anchor = getByRole('link');

		expect(anchor).toHaveAttribute('href', mock.button.href);
	});

	it('should render PaymentIcons', () => {
		const paymentIcons = getByTestId('mock-payment-icons');
		const text = getByText('Formas de pagamento');

		expect(paymentIcons).toBeInTheDocument();
		expect(text).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const { container } = render(<CheckoutSection {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
