import { MainModel } from '@/domain/models/Main';

import { cn } from '@/utils/cn';

import { Footer } from '@/presentation/components/molecules/Footer';
import { Hero } from '@/presentation/components/molecules/Hero';

import * as Section from './helpers/exports/sections';

import { classNames } from './MainTemplate.styles';

export type MainTemplateProps = MainModel;

export const MainTemplate = (props: MainTemplateProps) => {
	return (
		<main>
			<Hero {...props.hero} />

			<div className={cn(classNames.wrapperStyles, classNames.containerStyles)}>
				<Section.IntroSection {...props.intro} />
				<Section.ChaptersSection {...props.chapters} />
			</div>

			<div
				className={cn(
					classNames.fullPageStyles,
					classNames.authorSectionStyles,
				)}
			>
				<Section.AuthorSection {...props.author} />
			</div>

			<div
				className={cn(
					classNames.wrapperStyles,
					classNames.previewSectionStyles,
				)}
			>
				<Section.PreviewSection {...props.preview} />
			</div>

			<div
				className={cn(
					classNames.wrapperStyles,
					classNames.checkoutSectionStyles,
				)}
			>
				<Section.CheckoutSection {...props.checkout} />
			</div>

			<div className={cn(classNames.wrapperStyles, classNames.containerStyles)}>
				<Section.ProjectSection {...props.project} />
			</div>

			<div
				className={cn(classNames.wrapperStyles, classNames.bonusSectionStyles)}
			>
				<Section.BonusSection {...props.bonus} />
			</div>

			<div className={cn(classNames.wrapperStyles, classNames.containerStyles)}>
				<Section.RememberCheckoutSection {...props.rememberCheckout} />
				<Section.FaqSection {...props.faq} />
			</div>

			<Footer className={classNames.footerStyles} {...props.footer} />
		</main>
	);
};
