import { videoMock } from '@/presentation/components/atoms/Video/Video.mock';
import { thumbnailMock } from '@/presentation/components/molecules/Thumbnail/Thumbnail.mock';

import { VideoThumbnailProps } from '.';

export const videoThumbnailMock: VideoThumbnailProps = {
	image: thumbnailMock.image,
	videoURL: videoMock.videoURL,
};
