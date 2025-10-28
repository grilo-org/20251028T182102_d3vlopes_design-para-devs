import { ReactNode } from 'react';

jest.mock('@/libs/components/ui/splidejs/Slider', () => ({
	SliderWrapper: ({ children }: { children: ReactNode }) => {
		return <div data-testid="mock-slider-wrapper">{children}</div>;
	},
	SliderItemWrapper: ({ children }: { children: ReactNode }) => {
		return <div data-testid="mock-slider-item-wrapper">{children}</div>;
	},
}));

jest.mock('@/presentation/components/molecules/BonusCard', () => ({
	BonusCard: () => <div data-testid="mock-bonus-card" />,
}));
