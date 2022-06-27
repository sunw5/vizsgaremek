require('dotenv').config();
const path = require('path');
const winston = require('winston');

const options = {
  file: {    
    level: process.env.LOG_LEVEL_FILE,
    filename: path.join(__dirname, '../../logs/app.log'),
    format: winston.format.simple(),
    handleExceptions: true,    
    maxsize: 5242880, // 5MB
  },
  console: {
    level: process.env.LOG_LEVEL_CONSOLE,
    format: winston.format.simple(),
    handleExceptions: true,
  },
};

const logger = winston.createLogger({
  format: winston.format.simple(),
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, 
});

logger.stream = {
  write: (message, encoding) => {
    logger.info(message);
  },
};

module.exports = logger;
