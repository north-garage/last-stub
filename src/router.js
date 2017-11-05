let expressions = require('./expressions');
let handler = require('./handler');

exports.get = (uri, response, header = {}) => {
    return expressions.expression('app', 'get', [
        {
            'type': 'Literal',
            'value': uri,
            'raw': `'${uri}'`
        },
        handler.handler([
            expressions.expression('res', 'json', [
                {
                    "type": "ObjectExpression",
                    "properties": [
                        {
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "hoge"
                            },
                            "computed": false,
                            "value": {
                                "type": "Literal",
                                "value": "fuga",
                                "raw": "'fuga'"
                            },
                            "kind": "init",
                            "method": false,
                            "shorthand": false
                        }
                    ]
                }
            ])
        ])
    ]);
};
