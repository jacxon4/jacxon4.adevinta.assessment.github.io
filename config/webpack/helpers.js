const path = require('path');

const rootPath = path.resolve(__dirname, '../..');
const resolveFromRootPath = (...args) => path.join(rootPath, ...args);

exports.srcPath = resolveFromRootPath('src', 'app');
exports.buildPath = resolveFromRootPath('build');
exports.distPath = resolveFromRootPath('build-prod');
exports.rootPath = rootPath;
