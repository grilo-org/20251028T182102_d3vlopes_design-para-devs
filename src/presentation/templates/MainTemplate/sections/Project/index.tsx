import { ProjectSectionModel } from '@/domain/models/Sections';

import { Heading } from '@/presentation/components/atoms/Heading';
import { VideoThumbnail } from '@/presentation/components/organisms/VideoThumbnail';

export type ProjectSectionProps = ProjectSectionModel;

export const ProjectSection = ({
	id,
	heading,
	description,
	video,
}: ProjectSectionProps) => {
	return (
		<section id={id} className="flex flex-col items-center w-full">
			<Heading>
				<h2 className="mb-6 font-heading font-bold text-6xl text-center md:text-9xl md:mb-14">
					{heading}
				</h2>
			</Heading>

			<p className="font-body text-lg leading-[170%] text-complementary-white text-center max-w-[21.4375rem] md:max-w-[48rem]">
				{description}
			</p>

			<div className="w-full mt-8 md:max-w-[50rem] md:mx-auto">
				<VideoThumbnail {...video} />
			</div>
		</section>
	);
};
