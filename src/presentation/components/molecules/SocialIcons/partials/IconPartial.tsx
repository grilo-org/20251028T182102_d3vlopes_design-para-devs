import { SocialIconModel } from '@/domain/models/SocialIcon';

import { Image } from '@/presentation/components/atoms/Image';

export const IconPartial = (icon: SocialIconModel) => {
	return (
		<a
			key={icon.id}
			title={icon.name}
			href={icon.href}
			target="_blank"
			rel="noreferrer"
			className="transition-all hover:brightness-75"
		>
			<Image {...icon} width={40} height={40} />
		</a>
	);
};
