import { RequestDocument } from 'graphql-request';

import { client } from './client';

export class GraphqlClientFacade {
	static async request<TData>(document: RequestDocument) {
		const data = await client.request<TData>(document);

		return data;
	}
}
