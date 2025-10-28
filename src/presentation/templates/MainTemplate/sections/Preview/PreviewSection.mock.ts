import { previewSliderMock } from '@/presentation/components/organisms/PreviewSlider/PreviewSlider.mock';

import { PreviewSectionProps } from '.';

export const previewSectionMock: PreviewSectionProps = {
	id: 'preview',
	heading: 'Preview',
	previews: previewSliderMock.items,
};
