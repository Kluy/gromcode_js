('use strict');

/**
 * @return {object}
 */
const createLogger = () => {
  // put your code here
  const messages = [];

  const getRecords = (messageType) => {
    return messages
      .sort((a, b) => b.dateTime - a.dateTime)
      .filter((elem) => elem.type === messageType);
  };

  const warn = (message) => {
    messages.push({
      message: message,
      dateTime: new Date(),
      type: 'warn',
    });
  };
  const error = (message) => {
    messages.push({
      message: message,
      dateTime: new Date(),
      type: 'error',
    });
  };

  const log = (message) => {
    messages.push({
      message: message,
      dateTime: new Date(),
      type: 'log',
    });
  };

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

// examples
const logger1 = createLogger();
setTimeout(() => {
  logger1.log('User logged in');
}, 1000);

setTimeout(() => {
  logger1.warn('User is tring to ented restricted page');
}, 2000);

setTimeout(() => {
  logger1.log('User logged out');
}, 3000);

setTimeout(() => {
  logger1.error('Unexpected error on the site');
}, 4000);
// logger1.log('User logged in');
// logger1.warn('User is tring to ented restricted page');
// logger1.log('User logged out');
logger1.error('Unexpected error on the site');

setTimeout(() => {
  console.log(logger1.getRecords());
}, 6000);

logger1.getRecords(); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// logger1.getRecords('log'); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// logger1.getRecords('error'); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
// logger1.getRecords('warn'); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
// logger2.getRecords('error'); // ===> []
// logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
// logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
// logger3.getRecords('error'); // ===> []
// logger3.getRecords(); // ===> []
