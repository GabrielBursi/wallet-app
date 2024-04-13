export default function (plop) {
    plop.setGenerator('component', {
        description: 'Create a template',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Nome do template:'
            },
            {
                type: 'confirm',
                name: 'useProps',
                message: 'Vai usar type para as propriedades do template?'
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../src/templates/{{pascalCase name}}/index.tsx',
                templateFile: 'templates/template/index.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/templates/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'templates/template/stories.stories.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/templates/{{pascalCase name}}/styles.ts',
                templateFile: 'templates/template/styles.ts.hbs'
            },
            {
                type: 'add',
                path: '../src/templates/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
                templateFile: 'templates/template/test.spec.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/templates/{{pascalCase name}}/types.ts',
                templateFile: 'templates/template/types.ts.hbs'
            }
        ]
    });
};
