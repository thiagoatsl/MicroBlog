const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, 'error.log');

const logger = {
    error: (message) => {
        const logMessage = `[${new Date().toISOString()}] ERRO: ${message}\n`;
        fs.appendFileSync(logPath, logMessage);
    }
};

module.exports = logger;