'use client';

import { HeroModel } from '@/domain/models/Hero';

import { useMediaQuery } from '@/presentation/hooks/useMediaQuery';

import { getTailwindTheme } from '@/utils/getTailwindTheme';

import { classNames } from './Hero.styles';

import { DesktopVersionPartial, MobileVersionPartial } from './partials';

export type HeroProps = HeroModel;

export const Hero = ({ ...props }: HeroProps) => {
	const { screens } = getTailwindTheme();

	const isDesktop = useMediaQuery(screens.lg);

	return (
		<div className={classNames.wrapper}>
			{isDesktop ? (
				<DesktopVersionPartial {...props} />
			) : (
				<MobileVersionPartial {...props} />
			)}
		</div>
	);
};
