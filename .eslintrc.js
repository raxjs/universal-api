module.exports = {
  extends: ['eslint-config-rax/react', 'eslint-config-rax/typescript'],
  globals: {
    'weex': 'readonly',
    // Alibaba MiniApp
    'my': 'readonly',
    'dd': 'readonly',
    // WeChat MiniProgram
    'wx': 'readonly',
    'tt': 'readonly',
    'getCurrentPages': 'readonly',
    'getApp': 'readonly'
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': ['off', ''],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'quotes': ['error', 'single'],
    'import/no-extraneous-dependencies': 'off'
  }
};