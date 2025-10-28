import { avatarMock } from '@/presentation/components/molecules/Avatar/Avatar.mock';
import { socialIconsMock } from '@/presentation/components/molecules/SocialIcons/SocialIcons.mock';

import { AuthorSectionProps } from '.';

export const authorSectionMock: AuthorSectionProps = {
	id: 'author',
	name: 'Leandro Lopes',
	expertise: 'Desenvolvedor Full Stack | UX/UI Designer',
	avatar: avatarMock,
	socials: socialIconsMock.icons,
	description:
		'Olá, me chamo Leandro Lopes, sou desenvolvedor Full Stack e UX/UI Designer com mais de 4 anos de experiência e fundador do Union Developers, uma empresa sem fins lucrativos com o objetivo de ajudar desenvolvedores júnior. Sou apaixonado por código, criação e compartilhar conhecimento.',
};
