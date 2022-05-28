const fs = require('fs');

const writeFile = content => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', content, err => {
            if (err) {
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
};

module.exports = {
    writeFile: writeFile,
}