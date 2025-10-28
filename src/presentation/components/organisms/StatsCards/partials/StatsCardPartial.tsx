import { StatsModel } from '@/domain/models/Stats';

import { StatsCard } from '@/presentation/components/molecules/StatsCard';

export const StatsCardPartial = (item: StatsModel) => {
	return <StatsCard key={item.id} {...item} />;
};
