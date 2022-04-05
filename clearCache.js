// Maintainer feature, undoes setup.js
var fs = require('fs');
fs.rmdirSync('./config', {
    recursive: true,
    force: false
});
fs.mkdirSync('./config');