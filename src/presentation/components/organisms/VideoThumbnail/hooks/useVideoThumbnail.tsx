'use client';

import { useState } from 'react';

export const useVideoThumbnail = () => {
	const [isPlayVideo, setIsPlayVideo] = useState(false);

	function handlePlayVideo() {
		setIsPlayVideo(true);
	}

	return {
		isPlayVideo,
		handlePlayVideo,
	};
};
