let initializer = require('./initializer');
let router = require('./router');
let layout = require('./layout');

exports.convert = (source) => {
    let body = initializer.prefix;
    body.push(router.get('/shops', {'hoge': 'fuga'}));
    body.push(initializer.suffix);

    return layout.program(body);
};
