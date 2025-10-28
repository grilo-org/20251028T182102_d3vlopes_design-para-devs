import { FooterModel } from '@/domain/models/Footer';

import { cn } from '@/utils/cn';

export interface FooterProps extends FooterModel {
	className?: string;
}

export const Footer = ({ authorCopyright, className }: FooterProps) => {
	const currentYear = new Date().getFullYear();

	return (
		<footer
			className={cn(
				'flex justify-center w-full bg-background-400 py-6',
				className,
			)}
		>
			<span className="font-body text-neutral-50">
				© {authorCopyright} - {currentYear}
			</span>
		</footer>
	);
};
