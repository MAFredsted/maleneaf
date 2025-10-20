module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'lit'
    ],
    extends: [
        'eslint:recommended',
        '@typescript-eslint/recommended',
        'plugin:lit/recommended'
    ],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module'
    },
    rules: {
        'indent': ['error', 2],
        '@typescript-eslint/indent': ['error', 2],
        
        // String quotes: single quotes
        'quotes': ['error', 'single'],
        '@typescript-eslint/quotes': ['error', 'single'],

        // No semicolons
        'semi': ['error', 'never'],
        '@typescript-eslint/semi': ['error', 'never'],
    
    },
    ignorePatterns: [
        //build directories
        '_site',
        'dist/',
        'node_modules/',
        'eleventy.js'
    ]
};