module.exports = {
  extends: ['eslint-config-rax/react', 'eslint-config-rax/typescript'],
  globals: {},
  rules: {
    '@typescript-eslint/interface-name-prefix': ['off', ''],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'quotes': ['error', 'single']
  }
};