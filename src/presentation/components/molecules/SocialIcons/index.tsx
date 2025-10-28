import { SocialIconModel } from '@/domain/models/SocialIcon';

import { IconPartial } from './partials/IconPartial';

export interface SocialIconsProps {
	icons: SocialIconModel[];
}

export const SocialIcons = ({ icons }: SocialIconsProps) => {
	return <div className="flex gap-4">{icons.map(IconPartial)}</div>;
};
