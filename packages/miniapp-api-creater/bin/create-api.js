#!/usr/bin/env node

const path = require('path');
const program = require('commander');

program
  .description('Starting create miniapp api')
  .option('-c, --config <config>', 'set config path', './')
  .option('-d, --dist <dist>', 'set dist path', './')
  .action(cmd => {
    console.log('xxxx')
    const workDirectory = path.resolve(process.env.CWD || process.cwd());
    const distDirectory = path.resolve(workDirectory, cmd.dist);
    const configPath = path.resolve(workDirectory, cmd.config);
    require('..')(require(configPath), distDirectory);
  })
  .parse(process.argv);
