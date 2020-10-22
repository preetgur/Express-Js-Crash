const moment = require('moment')

// define middleware
const logger = (req,res,next) => {
    console.log('Hello Middleware');
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    console.log('Time :',moment().format());
    
    
    next();
}

module.exports = logger