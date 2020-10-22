const express = require('express');
const path = require('path');

const app = express();

const members = [ 
    {
    id :1,
    name : "Gurpreet Singh",
    email : "abc@gmail.com",
    status : "active"
    },
    {
        id :2,
        name : "Ekbal Singh",
        email : "ekbal@gmail.com",
        status : "inactive"
        }
]
app.get('/api/members',(req,res) =>{
    res.json(members)
})

// Set static folder : public is the static server.Now you can access any html page using the 'name' of html page with extension

app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`Server is running on ${PORT} Ports`))