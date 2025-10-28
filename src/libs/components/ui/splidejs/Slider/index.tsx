import { ReactNode } from 'react';

import { Options, Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

export type SliderWrapperOptionsProps = Options;

export interface SliderWrapperProps {
	children: ReactNode;
	options?: SliderWrapperOptionsProps;
}

type SliderItemWrapperProps = Pick<SliderWrapperProps, 'children'>;

export const SliderWrapper = ({
	children,
	options,
}: SliderWrapperProps): JSX.Element => {
	const sliderOptions: SliderWrapperOptionsProps = {
		arrows: false,
		pagination: false,
		...options,
	};

	return <Splide options={sliderOptions}>{children}</Splide>;
};

export const SliderItemWrapper = ({ children }: SliderItemWrapperProps) => {
	return <SplideSlide>{children}</SplideSlide>;
};
