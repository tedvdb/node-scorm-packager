var files = require('../files.js');

module.exports = function (obj) {
  return {
    version: obj.version || '1.2',
    organization: obj.organization || '',
    title: obj.title || '',
    identifier: obj.identifier || 0,
    masteryScore: obj.masteryScore || 80,
    startingPage: obj.startingPage || 'index.html',
    files: obj.path ? files(obj.path) : files('./')
  };
}