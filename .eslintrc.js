module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    indent: ['error', 2, {SwitchCase: 1}],
    quotes: ['error', 'single', {avoidEscape: true}],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'no-empty-function': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    '.eslintrc.js',
    'index.js',
    'metro.config.js',
    'babel.config.js',
    '__tests__/App-test.tsx',
    'src/utils/callNativeMethod.js',
  ],
};
