import { StatsModel } from '@/domain/models/Stats';

import { StatsCardPartial } from './partials/StatsCardPartial';

export interface StatsCardsProps {
	items: StatsModel[];
}

export const StatsCards = ({ items }: StatsCardsProps) => {
	return (
		<div className="flex flex-col gap-4 md:flex-row">
			{items.map(StatsCardPartial)}
		</div>
	);
};
