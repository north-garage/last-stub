exports.expression = (identifier, method, args) => {
    return {
        "type": "ExpressionStatement",
        "expression": {
            "type": "CallExpression",
            "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                    "type": "Identifier",
                    "name": identifier
                },
                "property": {
                    "type": "Identifier",
                    "name": method
                }
            },
            "arguments": args
        }
    };
};
