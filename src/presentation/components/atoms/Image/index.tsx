import NextImage from 'next/image';
import type { ImageProps as NextImageProps } from 'next/image';

export type ImageProps = NextImageProps;

export const Image = ({ src, alt, ...rest }: ImageProps) => {
	return <NextImage src={src} alt={alt} {...rest} />;
};
