exports.let = (name, value, args = []) => {
    return {
        'type': 'VariableDeclaration',
        'declarations': [
            {
                'type': 'VariableDeclarator',
                'id': {
                    'type': 'Identifier',
                    'name': name
                },
                'init': {
                    'type': 'CallExpression',
                    'callee': {
                        'type': 'Identifier',
                        'name': value
                    },
                    'arguments': args
                }
            }
        ],
        'kind': 'let'
    };
};
