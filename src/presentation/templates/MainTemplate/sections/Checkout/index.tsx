'use client';

import { CheckoutSectionModel } from '@/domain/models/Sections';

import { useMediaQuery } from '@/presentation/hooks/useMediaQuery';

import { getTailwindTheme } from '@/utils/getTailwindTheme';

import { DesktopVersion, MobileVersion } from './components';

export type CheckoutSectionProps = CheckoutSectionModel;

export const CheckoutSection = (props: CheckoutSectionProps) => {
	const { screens } = getTailwindTheme();

	const isDesktop = useMediaQuery(screens.lg);

	return (
		<section id={props.id} className="bg-background-400 lg:rounded-[8px]">
			{isDesktop ? <DesktopVersion {...props} /> : <MobileVersion {...props} />}
		</section>
	);
};
