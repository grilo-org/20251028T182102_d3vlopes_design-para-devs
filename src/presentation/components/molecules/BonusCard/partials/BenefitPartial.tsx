import { BenefitType } from '@/domain/models/Bonus';

import { Image } from '@/presentation/components/atoms/Image';

import { classNames } from '../BonusCard.styles';

export const BenefitPartial = (benefit: BenefitType) => {
	return (
		<div key={benefit.id} className={classNames.benefitsWrapper}>
			<Image
				src="https://media.graphassets.com/d65K9uHRScCtAVILVcY8"
				alt="Ícone de positivo"
				width={40}
				height={40}
			/>

			<span className={classNames.benefitsDescription}>
				{benefit.description}
			</span>
		</div>
	);
};
