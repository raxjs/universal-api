const { getESLintConfig } = require('@iceworks/spec');

// https://www.npmjs.com/package/@iceworks/spec
module.exports = getESLintConfig('rax-ts', {
  rules: {
    'no-prototype-builtins': 'off',
    'no-useless-escape': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@iceworks/best-practices/no-js-in-ts-project': 'off',
    'no-param-reassign': 'off',
    'max-len': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off'
  }
});