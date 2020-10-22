const express = require('express');
const path = require('path');

const app = express();

// Set static folder : Now you can access any html page using the 'name' of html page with extension

app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`Server is running on ${PORT} Ports`))