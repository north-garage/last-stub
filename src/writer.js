let fs = require('fs');

let isTargetDirExists = (dir) => {
    !fs.existsSync(targetDir)
};

let mkdirIfNotExists = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
};

exports.packageJson = (dir) => {
    mkdirIfNotExists(dir);
    // FIXME: 相対パスしんどそう
    fs.createReadStream('./resources/target.package.json', ).pipe(fs.createWriteStream(dir + '/package.json'));
};

exports.appJs = (dir, sourceCode) => {
    mkdirIfNotExists(dir);
    fs.writeFile(dir + '/app.js', sourceCode);
};
