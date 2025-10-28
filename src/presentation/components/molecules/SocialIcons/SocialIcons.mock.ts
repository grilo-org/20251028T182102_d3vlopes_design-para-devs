import { generateID } from '@/utils/generateID';

import { SocialIconsProps } from '.';

export const socialIconsMock: SocialIconsProps = {
	icons: [
		{
			id: generateID(),
			src: 'https://media.graphassets.com/FmaBseBJSHi2UgLQ2WQu',
			alt: 'As letras IN',
			name: 'Linkedin',
			href: 'https://www.linkedin.com/in/d3vlopes',
		},
		{
			id: generateID(),
			src: 'https://media.graphassets.com/dtksFZD9T9K3tpWOC6DH',
			alt: 'Um quadrado com um circulo dentro',
			name: 'Instagram',
			href: 'https://instagram.com/d3vlopes',
		},
		{
			id: generateID(),
			src: 'https://media.graphassets.com/RhWW7rVkStSZBdvvV4sk',
			alt: 'Uma simbiose de um polvo e um gato',
			name: 'Github',
			href: 'https://github.com/d3vlopes',
		},
	],
};
