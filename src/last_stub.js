let escodegen = require('escodegen');
let reader = require('./reader');
let ast = require('./ast');
let writer = require('./writer');

module.exports = (dir, filename) => {
    // 1. parse swagger.yaml
    let source = reader.read(dir + '/' + filename);
    // 2. convert to AST
    let program = ast.convert(source);
    // 3. generate javascript source code from AST
    let sourceCode = escodegen.generate(program);
    // 4. output as app.js
    console.log("### Generated source code ###");
    console.log(sourceCode);
    let targetDir = dir + '/target';
    writer.packageJson(targetDir);
    writer.appJs(targetDir, sourceCode);
};
