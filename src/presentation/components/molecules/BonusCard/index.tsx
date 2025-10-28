import { BonusModel } from '@/domain/models/Bonus';

import { Heading } from '@/presentation/components/atoms/Heading';

import { BenefitPartial } from './partials/BenefitPartial';

import { classNames } from './BonusCard.styles';

export type BonusCardProps = BonusModel;

export const BonusCard = ({
	icon,
	title,
	description,
	benefitTitle,
	benefits,
}: BonusCardProps) => {
	return (
		<div className={classNames.wrapperStyles}>
			<header className={classNames.headerStyles}>
				<img src={icon.src} alt={icon.alt} className={classNames.iconStyles} />

				<Heading>
					<h2 className={classNames.titleStyles}>{title}</h2>
				</Heading>
			</header>

			<hr className={classNames.dividerStyles} />

			<div className={classNames.contentWrapperStyles}>
				<p className={classNames.benefitDescriptionStyles}>{description}</p>

				<Heading>
					<h3 className={classNames.benefitTitleStyles}>{benefitTitle}:</h3>
				</Heading>

				{benefits.map(BenefitPartial)}
			</div>
		</div>
	);
};
