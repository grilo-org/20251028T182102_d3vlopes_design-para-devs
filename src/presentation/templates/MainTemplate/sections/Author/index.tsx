import { AuthorSectionModel } from '@/domain/models/Sections';

import { Heading } from '@/presentation/components/atoms/Heading';
import { Avatar } from '@/presentation/components/molecules/Avatar';
import { SocialIcons } from '@/presentation/components/molecules/SocialIcons';

import { classNames } from './AuthorSection.styles';

export type AuthorSectionProps = AuthorSectionModel;

export const AuthorSection = ({
	id,
	name,
	expertise,
	avatar,
	socials,
	description,
}: AuthorSectionProps) => {
	return (
		<section id={id} className={classNames.containerStyles}>
			<Avatar {...avatar} />

			<div className={classNames.contentWrapperStyles}>
				<div className={classNames.headingWrapperStyles}>
					<Heading>
						<h2 className={classNames.nameStyles}>{name}</h2>
					</Heading>

					<Heading>
						<h3 className={classNames.expertiseStyles}>{expertise}</h3>
					</Heading>
				</div>

				<SocialIcons icons={socials} />

				<p className={classNames.descriptionStyles}>{description}</p>
			</div>
		</section>
	);
};
