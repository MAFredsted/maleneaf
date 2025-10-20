import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import litPlugin from 'eslint-plugin-lit'

export default [
  // Base recommended config
  js.configs.recommended,
  
  // TypeScript and Lit config
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'lit': litPlugin
    },
    rules: {
      // Basic ESLint rules (not TypeScript-specific)
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      
      // TypeScript ESLint rules (using correct syntax)
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // Lit plugin rules
      'lit/no-legacy-template-syntax': 'error',
      'lit/no-template-bind': 'error'
    }
  },
  
  // Ignore patterns
  {
    ignores: [
      '_site/**',
      'dist/**',
      'node_modules/**',
      'eleventy.js'
    ]
  }
]