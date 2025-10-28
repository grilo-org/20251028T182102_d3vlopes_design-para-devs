import { Thumbnail, Video } from './exports';

import { VideoThumbnailProps } from '.';

export interface VideoThumbnailFactoryProps extends VideoThumbnailProps {
	isPlayVideo: boolean;
	handlePlayVideo: () => void;
}

export class VideoThumbnailFactory {
	static make(props: VideoThumbnailFactoryProps) {
		switch (props.isPlayVideo) {
			case true:
				return <Video className={props.className} videoURL={props.videoURL} />;

			case false:
				return (
					<Thumbnail
						image={props.image}
						onClickPlayButton={props.handlePlayVideo}
					/>
				);
		}
	}
}

export const makeComponent = (props: VideoThumbnailFactoryProps) => {
	return VideoThumbnailFactory.make(props);
};
