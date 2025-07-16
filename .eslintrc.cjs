module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'no-restricted-syntax': 'off',
    'max-classes-per-file': 'off',
    'import/extensions': ['error', 'always'],
  },
};
