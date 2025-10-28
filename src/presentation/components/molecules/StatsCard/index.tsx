import { StatsModel } from '@/domain/models/Stats';

import { classNames } from './StatsCard.styles';

export type StatsCardProps = StatsModel;

export const StatsCard = ({ number, text }: StatsCardProps) => {
	return (
		<div className={classNames.wrapperStyles}>
			<strong className={classNames.numberStyles}>{number}</strong>
			<span className={classNames.textStyles}>{text}</span>
		</div>
	);
};
