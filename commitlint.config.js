// .commitlintrc.js
const { getCommitlintConfig } = require('@iceworks/spec');

// getCommitlintConfig(rule: 'rax'|'react', customConfig?);
module.exports = getCommitlintConfig('rax');