'use client';

import type { ThumbnailModel, VideoProps } from './exports';

import { makeComponent } from './VideoThumbnail.factory';

import { useVideoThumbnail } from './hooks/useVideoThumbnail';

export type VideoThumbnailProps = ThumbnailModel & VideoProps;

export const VideoThumbnail = ({ ...props }: VideoThumbnailProps) => {
	const { isPlayVideo, handlePlayVideo } = useVideoThumbnail();

	const factory = makeComponent({
		isPlayVideo,
		handlePlayVideo,
		...props,
	});

	return <>{factory}</>;
};
