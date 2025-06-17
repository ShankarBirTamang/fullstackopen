import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      '@stylistic/js': stylisticJs,
      js,
    },
    extends: ['js/recommended'],
  },
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**'],
  },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.node } },
  {
    rules: {
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      // '@stylistic/js/semi': ['error', 'never'],
    },
  },
]);
