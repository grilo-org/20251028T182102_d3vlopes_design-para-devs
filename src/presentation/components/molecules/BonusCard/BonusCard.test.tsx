import { render, screen } from '@testing-library/react';

import { bonusCardMock } from './BonusCard.mock';

import { BonusCard } from '.';

const { getByRole, getByText, getAllByRole } = screen;

const mock = bonusCardMock[0];

describe('<BonusCard />', () => {
	beforeEach(() => render(<BonusCard {...mock} />));

	it('should render icon', () => {
		const icon = getByRole('img', { name: mock.icon.alt });

		expect(icon).toHaveAttribute('src', mock.icon.src);
	});

	it('should render title', () => {
		const title = getByRole('heading', { name: mock.title });

		expect(title).toBeInTheDocument();
	});

	it('should render description', () => {
		const description = getByText(mock.description);

		expect(description);
	});

	it('should render benefit title', () => {
		const benefitTitle = getByRole('heading', {
			name: `${mock.benefitTitle}:`,
		});

		expect(benefitTitle).toBeInTheDocument();
	});

	it('should render correct benefits icon length', () => {
		const iconsChecked = getAllByRole('img', { name: 'Ícone de positivo' });

		expect(iconsChecked).toHaveLength(mock.benefits.length);
	});

	it('should render benefits description', () => {
		for (const benefit of mock.benefits) {
			const benefitDescription = getByText(benefit.description);

			expect(benefitDescription).toBeInTheDocument();
		}
	});

	it('should match snapshot', () => {
		const { container } = render(<BonusCard {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
