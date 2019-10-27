const path = require('path');

const rootPath = path.resolve(__dirname, '../..');
const resolveFromRootPath = (...args) => path.join(rootPath, ...args);

exports.src = resolveFromRootPath('src');
exports.appPath = resolveFromRootPath('src', 'app');
exports.buildPath = resolveFromRootPath('build');
exports.distPath = resolveFromRootPath('build-prod');
exports.rootPath = rootPath;
