import { MainTemplate } from '@/presentation/templates/MainTemplate';

import { JsonLd } from './seo';

import { mapperData } from './helpers/mapperData';

export default async function Home() {
	const data = await mapperData();

	return (
		<>
			<MainTemplate {...data} />

			<JsonLd data={data} />
		</>
	);
}
