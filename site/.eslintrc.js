module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
		node: true,
	},
	extends: "eslint:recommended",
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	rules: {
		"no-console": "off",
		"no-unused-vars": "warn",
	},
};
