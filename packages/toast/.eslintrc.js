module.exports = {
  extends: ['eslint-config-rax/react', 'eslint-config-rax/typescript'],
  globals: {},
  rules: {
    'no-extra-parens': ['error', 'functions'],
    '@typescript-eslint/explicit-function-return-type': false,
  }
};
