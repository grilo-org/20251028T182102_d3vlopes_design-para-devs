import { VideoModel } from '@/domain/models/Video';

import { cn } from '@/utils/cn';

export interface VideoProps extends VideoModel {
	className?: string;
}

export const Video = ({ videoURL, className = '' }: VideoProps) => {
	const classNames = `rounded-[4px] w-full ${className}`;

	return (
		<>
			<video
				className={cn(classNames)}
				controls
				autoPlay
				muted
				data-testid="video"
			>
				<source data-testid="video-source" src={videoURL} type="video/mp4" />
			</video>
		</>
	);
};
