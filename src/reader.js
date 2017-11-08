let fs = require('fs');
let yaml = require('js-yaml');

exports.read = (file) => {
    let doc = yaml.safeLoad(fs.readFileSync(file));
};
