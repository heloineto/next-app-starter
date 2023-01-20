module.exports = {
	/*
	 * The rules below scream at your face all the time in development.
	 * They should be only activated when committing (lint-staged)
	 */
	rules: {
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
	},
};
