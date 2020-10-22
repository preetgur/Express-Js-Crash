const express = require('express');
const path = require('path');
const members = require('./Members') 
const moment = require('moment')

const app = express();

// define middleware
const logger = (req,res,next) => {
    console.log('Hello Middleware');
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    console.log('Time :',moment().format());
    
    
    next();
}

// Init middleware
app.use(logger)

app.get('/api/members',(req,res) =>{
    res.json(members)
})

// Set static folder : public is the static server.Now you can access any html page using the 'name' of html page with extension

app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`Server is running on ${PORT} Ports`))