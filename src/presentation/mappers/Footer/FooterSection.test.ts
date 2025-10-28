import { FooterAPI } from '@/api/models/Sections';

import { FooterMapper } from '.';

const mock: FooterAPI = {
	authorCopyright: 'Leandro Lopes',
};

describe('FooterMapper', () => {
	describe('toDomain', () => {
		it('should mapper data for domain model', () => {
			const data = FooterMapper.toDomain(mock);

			expect(data).toStrictEqual({
				authorCopyright: mock.authorCopyright,
			});
		});
	});
});
