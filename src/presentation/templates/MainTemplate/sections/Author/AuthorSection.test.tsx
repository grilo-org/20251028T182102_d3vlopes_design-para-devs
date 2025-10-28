import { render, screen } from '@testing-library/react';

import { authorSectionMock as mock } from './AuthorSection.mock';

import { AuthorSection } from '.';

jest.mock('@/presentation/components/molecules/Avatar', () => ({
	Avatar: () => <div data-testid="mock-avatar" />,
}));

jest.mock('@/presentation/components/molecules/SocialIcons', () => ({
	SocialIcons: () => <div data-testid="mock-social-icons" />,
}));

const { getByRole, getByTestId, getByText } = screen;

describe('<AuthorSection />', () => {
	beforeEach(() => render(<AuthorSection {...mock} />));

	it('should contain correct section id', () => {
		const { container } = render(<AuthorSection {...mock} />);

		const section = container.getElementsByTagName('section')[0];

		expect(section).toHaveAttribute('id', mock.id);
	});

	it('should render Avatar', () => {
		const avatar = getByTestId('mock-avatar');

		expect(avatar).toBeInTheDocument();
	});

	it('should render name', () => {
		const authorName = getByRole('heading', { name: mock.name });

		expect(authorName).toBeInTheDocument();
	});

	it('should render expertise', () => {
		const authorExpertise = getByRole('heading', {
			name: mock.expertise,
		});

		expect(authorExpertise).toBeInTheDocument();
	});

	it('should render SocialIcons', () => {
		const socialIcons = getByTestId('mock-social-icons');

		expect(socialIcons).toBeInTheDocument();
	});

	it('should render description', () => {
		const description = getByText(mock.description);

		expect(description).toBeInTheDocument();
	});

	it('should match snapshot', () => {
		const { container } = render(<AuthorSection {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
