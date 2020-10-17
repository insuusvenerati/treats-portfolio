module.exports = {
  env: {
    browser: true,
    node: true,
    'cypress/globals': true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:cypress/recommended',
    // 'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'react', 'cypress'],
  rules: {
    'react/prop-types': 0,
    'no-console': 'error',
    '@typescript-eslint/unbound-method': 0,
  },
};
