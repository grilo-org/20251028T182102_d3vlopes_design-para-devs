import { PreviewSectionModel } from '@/domain/models/Sections';

import { Heading } from '@/presentation/components/atoms/Heading';
import { PreviewSlider } from '@/presentation/components/organisms/PreviewSlider';

export type PreviewSectionProps = PreviewSectionModel;

export const PreviewSection = ({
	id,
	heading,
	previews,
}: PreviewSectionProps) => {
	return (
		<section id={id}>
			<Heading>
				<h2 className="mb-6 font-heading font-bold text-6xl text-center md:text-9xl md:mb-14">
					{heading}
				</h2>
			</Heading>

			<PreviewSlider items={previews} />
		</section>
	);
};
