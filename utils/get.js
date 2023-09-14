const fs = require('fs');

const getData = (path) => {
    const file = fs.readFileSync(path, {encoding:'utf8'});
    const fileData = JSON.parse(file);
    return fileData
}

module.exports = { getData}