jest.mock('@/presentation/components/organisms/StatsCards', () => ({
	StatsCards: () => {
		return <div data-testid="mock-stats-cards" />;
	},
}));
