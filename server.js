const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')
const app = express();


// Init middleware
// app.use(logger)

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Set static folder : public is the static server.Now you can access any html page using the 'name' of html page with extension

app.use(express.static(path.join(__dirname,'public')));

app.use('/api/members',require('./routes/api/members'))

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`Server is running on ${PORT} Ports`))