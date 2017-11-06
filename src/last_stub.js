let escodegen = require('escodegen');
let layout = require('./layout');
let initializer = require('./initializer');
let router = require('./router');

module.exports = (dir, filename) => {
    let body = initializer.prefix;
    // 1. parse swagger.yaml
    // 2. convert to AST
    console.log(router.get('/shops', {'hoge': 'fuga'}));
    body.push(router.get('/shops', {'hoge': 'fuga'}));
    body.push(initializer.suffix);

    let program = layout.program(body);
    // 3. generate javascript source code from AST
    let result = escodegen.generate(program);

    console.log(result);
};
