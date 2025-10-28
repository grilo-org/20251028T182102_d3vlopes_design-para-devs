jest.mock('@/presentation/components/atoms/Heading', () => ({
	Heading: function Mock({
		children,
	}: {
		children: React.ReactNode;
	}) {
		return <div data-testid="mock-heading">{children}</div>;
	},
}));

jest.mock('@/presentation/components/atoms/Image', () => ({
	Image: function Mock() {
		return <div data-testid="mock-image" />;
	},
}));
