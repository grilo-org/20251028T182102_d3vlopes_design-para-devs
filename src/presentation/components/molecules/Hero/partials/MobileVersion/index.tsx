import {
	Button,
	Heading,
	Image,
} from '@/presentation/components/molecules/Hero/utils/exports';

import { HeroProps } from '@/presentation/components/molecules/Hero';

import { classNames } from '@/presentation/components/molecules/Hero/Hero.styles';

export const MobileVersionPartial = ({
	heading,
	description,
	bookImage,
	buttons,
}: HeroProps) => {
	return (
		<div className={classNames.wrapperMobileStyles}>
			<Heading htmlContent={heading} />

			<p className={classNames.description}>{description}</p>

			<div className={classNames.buttonsWrapperStyles}>
				<a
					className={classNames.buttonPrimaryMobileStyles}
					href={buttons.primary.target}
					target="_blank"
					rel="noreferrer"
				>
					<Button className={classNames.buttonPrimaryMobileStyles}>
						{buttons.primary.text}
					</Button>
				</a>

				<a href={buttons.secondary.target}>
					<Button variant="ghost">{buttons.secondary.text}</Button>
				</a>
			</div>

			<div className={classNames.bookImage}>
				<Image fill priority {...bookImage} />
			</div>
		</div>
	);
};
