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
      const { body } = path.node;
      let specifiers = [];
      const indexs = [];
      body.forEach((n, index) => {
        if (types.isImportDeclaration(n) && n.source.value.startsWith('@utils')) {
          specifiers = specifiers.concat(n.specifiers);
          indexs.push(index);
        }
      });

      if (indexs.length > 0) {
        indexs.reverse().forEach(i => body.splice(i, 1));
        changed = true;
        body.unshift(types.importDeclaration(specifiers, types.stringLiteral('@uni/utils')));
      }
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