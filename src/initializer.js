let variables = require('./variables');
let expressions = require('./expressions');

exports.prefix = [
    variables.let('express', 'require', [
        {'type': 'Literal',
         'value': 'express',
         'raw': "'express'"}
    ]),
    variables.let('app', 'express', []),
    expressions.expression('app', 'disable', [
        {'type': 'Literal',
         'value': 'x-powered-by',
         'raw': "'x-powered-by'"}
    ])
];

exports.suffix = expressions.expression('app', 'listen', [
    {'type': 'Literal',
     'value': '3000',
     'raw': '3000'}
]);
