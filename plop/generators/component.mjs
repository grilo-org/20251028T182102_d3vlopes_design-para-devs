export default function (plop) {
	plop.setGenerator('component', {
		description: 'Create a component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component name?',
			},
			{
				type: 'list',
				name: 'type',
				message: 'What type?',
				choices: () => [
					{ name: 'Atom', value: 'atoms' },
					{ name: 'Molecule', value: 'molecules' },
					{ name: 'Organism', value: 'organisms' },
				],
			},
		],
		actions: [
			{
				type: 'add',
				path: '../src/presentation/components/{{camelCase type}}/{{pascalCase name}}/index.tsx',
				templateFile: 'partials/component/index.tsx.hbs',
			},
			{
				type: 'add',
				path: '../src/presentation/components/{{camelCase type}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
				templateFile: 'partials/component/stories.tsx.hbs',
			},
			{
				type: 'add',
				path: '../src/presentation/components/{{camelCase type}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
				templateFile: 'partials/component/test.tsx.hbs',
			},
		],
	});
}
