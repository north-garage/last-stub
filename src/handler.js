exports.handler = (body) => {
    return {
        "type": "Program",
        "body": [
            {
                "type": "ExpressionStatement",
                "expression": {
                    "type": "ArrowFunctionExpression",
                    "id": null,
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "req"
                        },
                        {
                            "type": "Identifier",
                            "name": "res"
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": body
                    },
                    "generator": false,
                    "expression": false,
                    "async": false
                }
            }
        ],
        "sourceType": "script"
    };
};
