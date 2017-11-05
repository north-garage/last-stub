exports.program = (source) => {
    return {
        'type': 'Program',
        'body': source,
        'sourceType': 'script'
    };
};
