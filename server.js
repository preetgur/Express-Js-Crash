const express = require('express');
const path = require('path');
const members = require('./Members') 
const logger = require('./middleware/logger')
const app = express();


// Init middleware
// app.use(logger)

// Get all memmbers
app.get('/api/members',(req,res) =>{
    res.json(members)
})

// Get sigle memeber
app.get('/api/members/:id',(req,res)=> {
    res.json(members.filter( (val)=> val.id === parseInt(req.params.id)))
})

// Set static folder : public is the static server.Now you can access any html page using the 'name' of html page with extension

app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`Server is running on ${PORT} Ports`))