const { getESLintConfig } = require('@iceworks/spec');

// https://www.npmjs.com/package/@iceworks/spec
module.exports = getESLintConfig('rax-ts', {
  rules: {
    'no-prototype-builtins': 'off',
    'import/no-named-as-default-member': 'off',
    'no-useless-escape': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@iceworks/best-practices/no-js-in-ts-project': 'off',
    'no-param-reassign': 'off',
    'max-len': 'off',
    '@iceworks/best-practices/recommend-polyfill': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off'
  }
});