module.exports = {
	extends: [
		'next/core-web-vitals',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/strict',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:tailwindcss/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['tailwindcss', '@typescript-eslint'],
	root: true,
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		project: './tsconfig.json',
	},
	ignorePatterns: ['*.js', '*.json'],
	rules: {
		// This is for compatibility with the app folder. Might not be need in the future.
		'@next/next/no-html-link-for-pages': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		/*
		 * The rules below scream at your face all the time in development.
		 * They should be only activated when committing (lint-staged).
		 *
		 * Re-activate these rules in ./.eslintrc-commit.js
		 */
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
	},
};
