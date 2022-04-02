const glob = require('glob');
const fs = require('fs-extra');
const babelParser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const types = require('@babel/types');
const generate = require('@babel/generator').default;


function parse(file) {
  const source = fs.readFileSync(file, { encoding: 'utf8' });
  let ast;
  try {
    ast = babelParser.parse(source, {
      sourceType: 'module',
      plugins: [
        'typescript',
        'classProperties',
        'objectRestSpread',
        'optionalCatchBinding',
        'dynamicImport',
        'decorators-legacy',
        'asyncGenerators',
        'exportDefaultFrom',
        'exportNamespaceFrom',
        'optionalCatchBinding',
        'throwExpressions',
        'optionalChaining',
        'nullishCoalescingOperator',
      ],
    });
  } catch (e) {
    console.error('error', file);
    return;
  }

  if (!ast) {
    console.error('error', file);
    return;
  }
  let changed = false;
  traverse(ast, {
    Program(path) {
      // @utils/xxx > @uni/utils/xxx
      const { body } = path.node;
      body.forEach((n, index) => {
        if (types.isImportDeclaration(n) && n.source.value.startsWith('@utils')) {
          changed = true;
          n.source = types.stringLiteral(n.source.value.replace('@utils', '@uni/utils'));
        }
      });
    },
  });
  if (changed) {
    fs.writeFileSync(file, generate(ast, {}, source).code);
  }
}

glob('./src/packages/**/src/**/*.ts', function(err, files) {
  files.forEach(file => {
    parse(file);
  });
});