
module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules:{
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'max-len': [
            'error',
            {code: 140, ignoreComments: true, ignoreStrings: true}
        ],
        'no-undef': 'off',
    }
}