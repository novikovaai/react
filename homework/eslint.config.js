// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{rules: {
		'semi': ['error', 'always', { 'omitLastInOneLineBlock': false}],
		'comma-dangle': ['error', 'never'],
		quotes: ['error', 'single'],
		'react/prop-types': [0],
		'indent': ['error', 'tab']
	}
	}
	// ...
);