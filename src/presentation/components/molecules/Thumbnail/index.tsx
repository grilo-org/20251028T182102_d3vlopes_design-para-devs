import { ThumbnailModel } from '@/domain/models/Thumbnail';

import { Image } from '@/presentation/components/atoms/Image';

import { PlayIcon } from './assets/PlayIcon';

import { classNames } from './Thumbnail.styles';

export interface ThumbnailProps extends ThumbnailModel {
	onClickPlayButton: () => void;
}

export const Thumbnail = ({ image, onClickPlayButton }: ThumbnailProps) => {
	return (
		<div className={classNames.wrapperStyles}>
			<Image
				className={classNames.imageStyles}
				fill
				src={image.src}
				alt={image.alt}
			/>

			<div className={classNames.imageOverlayStyles} />

			<button
				type="button"
				className={classNames.buttonStyles}
				onClick={onClickPlayButton}
			>
				<PlayIcon />
			</button>
		</div>
	);
};
