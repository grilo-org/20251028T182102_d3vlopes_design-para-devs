import { render } from '@testing-library/react';

import { Heading } from '@/presentation/components/atoms/Heading';

export enum HeadingRender {
	AS_H2,
	AS_HTML,
	AS_HTML_WITH_CUSTOM_CLASS,
}

export class HeadingFactoryMock {
	static make(renderType: HeadingRender) {
		switch (renderType) {
			case HeadingRender.AS_H2:
				return render(
					<Heading>
						<h2>Heading</h2>
					</Heading>,
				);

			case HeadingRender.AS_HTML:
				return render(
					<Heading htmlContent="<h1>Se torne um desenvolvedor que vai <strong>além do código</strong></h1>" />,
				);

			case HeadingRender.AS_HTML_WITH_CUSTOM_CLASS:
				return render(
					<Heading
						className="custom-class"
						htmlContent="<h1>Se torne um desenvolvedor que vai <strong>além do código</strong></h1>"
					/>,
				);
		}
	}
}
