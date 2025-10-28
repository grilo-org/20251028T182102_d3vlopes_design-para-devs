import { render } from '@testing-library/react';

import { Button } from '@/presentation/components/atoms/Button';

export enum ButtonRender {
	DEFAULT,
	GHOST,
	CUSTOM_CLASS,
	AS_ANCHOR,
}

export class ButtonFactory {
	static make(renderType: ButtonRender) {
		switch (renderType) {
			case ButtonRender.DEFAULT:
				return render(<Button>Button</Button>);

			case ButtonRender.GHOST:
				return render(<Button variant="ghost">Button</Button>);

			case ButtonRender.CUSTOM_CLASS:
				return render(<Button className="custom-class">Button</Button>);

			case ButtonRender.AS_ANCHOR:
				return render(
					<Button asChild>
						<a href="/">Anchor</a>
					</Button>,
				);
		}
	}
}
