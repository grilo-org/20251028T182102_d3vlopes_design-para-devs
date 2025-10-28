import { useEffect, useState } from 'react';

export const useMediaQuery = (size: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(`(min-width: ${size})`);

		if (media.matches !== matches) {
			setMatches(media.matches);
		}

		const listener = () => setMatches(media.matches);

		window.addEventListener('resize', listener);

		return () => window.removeEventListener('resize', listener);
	}, [matches, size]);

	return matches;
};
