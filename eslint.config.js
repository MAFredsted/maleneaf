import { defineConfig } from 'eslint/config'
import parser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import litPlugin from 'eslint-plugin-lit'
import globals from 'globals'

export default defineConfig([
  // global ignores (don't lint build / output folders)
  {
    ignores: ['_site/**', 'ssr/**', 'node_modules/**']
  },

  // Type-aware rules only for your TS source files (uses parserOptions.project)
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json']
      },
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: { '@typescript-eslint': tsPlugin, lit: litPlugin },
    rules: {
      indent: ['error', 2],
      semi: ['error', 'never'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', 'never'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'lit/no-complex-attribute-binding': 'off'
    }
  },

  // Non-type-checked files (JS, generated files, config) — do NOT supply parserOptions.project
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module'
      },
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: { '@typescript-eslint': tsPlugin, lit: litPlugin },
    rules: {
      indent: ['error', 2],
      semi: ['error', 'never'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', 'never'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'lit/no-complex-attribute-binding': 'off'
    }
  }
])
