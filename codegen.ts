import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema:
		'https://api-sa-east-1.hygraph.com/v2/clt39qcp9243n07w7anfnybmt/master',
	documents: 'src/api/**/*.ts',
	generates: {
		'src/api/generated/': {
			preset: 'client',
			plugins: [],
		},
	},
};

export default config;
