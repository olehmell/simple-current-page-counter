const log4js = require('log4js');
log4js.configure({
  appenders: { default: { type: 'file', filename: '../logs/default.log' } },
  categories: { default: { appenders: ['default'], level: 'info' } }
});

module.exports = log4js.getLogger('default')