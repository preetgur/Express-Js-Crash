const express = require('express')
const router = express.Router()

const members = require('../../Members')

// Get all memmbers
router.get('/',(req,res) =>{
    res.json(members)
})

// Get sigle memeber
router.get('/:id',(req,res)=> {

    // return true or false
    const found = members.some(val => val.id === parseInt(req.params.id))

    if (found)
    {
        res.json(members.filter( (val)=> val.id === parseInt(req.params.id))) 

    }
    else
    {
        res.status(400).json({msg:`No memeber with id ${req.params.id}`})
    }
})



module.exports = router