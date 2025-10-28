import { ReactNode } from 'react';

jest.mock('@/libs/components/ui/splidejs/Slider', () => ({
	SliderWrapper: ({ children }: { children: ReactNode }) => {
		return <div data-testid="mock-slider-wrapper">{children}</div>;
	},
	SliderItemWrapper: ({ children }: { children: ReactNode }) => {
		return <div data-testid="mock-slider-item-wrapper">{children}</div>;
	},
}));

jest.mock('@/libs/components/ui/react-photoswipe-gallery', () => ({
	LightboxWrapper: ({ children }: { children: ReactNode }) => (
		<div data-testid="mock-lightbox-wrapper">{children}</div>
	),
	LightboxItemWrapper: ({ children }: { children: ReactNode }) => (
		<div data-testid="mock-lightbox-item-wrapper">{children}</div>
	),
}));

jest.mock('@/presentation/components/atoms/Image', () => ({
	Image: () => <div data-testid="mock-image" />,
}));
