import { ImageModel } from '@/domain/models/Image';

import { Image } from '@/presentation/components/atoms/Image';

export type AvatarProps = ImageModel;

export const Avatar = ({ src, alt }: AvatarProps) => {
	return (
		<div className="relative bg-background-300 rounded-full w-[11.5625rem] h-[11.5625rem] lg:w-[23.875rem] lg:h-[23.875rem]">
			<Image fill className="rounded-[inherit]" src={src} alt={alt} />
		</div>
	);
};
