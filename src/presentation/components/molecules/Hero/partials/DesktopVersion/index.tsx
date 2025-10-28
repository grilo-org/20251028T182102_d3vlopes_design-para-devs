import {
	Button,
	Heading,
	Image,
} from '@/presentation/components/molecules/Hero/utils/exports';

import { classNames } from '@/presentation/components/molecules/Hero/Hero.styles';

import { HeroProps } from '@/presentation/components/molecules/Hero';

export const DesktopVersionPartial = ({
	heading,
	description,
	buttons,
	bookImage,
}: HeroProps) => {
	return (
		<>
			<div className={classNames.wrapperDesktopStyles}>
				<div>
					<Heading className="xl:w-[47.75rem]" htmlContent={heading} />

					<p className={classNames.description}>{description}</p>

					<div className={classNames.buttonsWrapperStyles}>
						<a
							className={classNames.buttonPrimaryDesktopStyles}
							href={buttons.primary.target}
							target="_blank"
							rel="noreferrer"
						>
							<Button className={classNames.buttonPrimaryDesktopStyles}>
								{buttons.primary.text}
							</Button>
						</a>

						<a href={buttons.secondary.target}>
							<Button variant="ghost">{buttons.secondary.text}</Button>
						</a>
					</div>
				</div>

				<div className={classNames.bookImage}>
					<Image
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						{...bookImage}
					/>
				</div>
			</div>

			<img
				src="https://media.graphassets.com/Ymfte6u4QKKRTZu8ruwd"
				alt="Imagem de decoração"
				className={classNames.shapeStyles}
			/>
		</>
	);
};
