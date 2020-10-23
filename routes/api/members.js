const express = require('express')
const router = express.Router()
const uuid = require('uuid')
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

// Create New Memger
router.post('/', (req,res) => {
    // res.send(req.body)
    const newMember = {
        id : uuid.v4(),
        name : req.body.name,
        email : req.body.email,
        status : 'active'

    }

    if(!newMember.name || !newMember.email)
    {
        return res.status(400).json({msg:"Please include a name and email"})
    }

    // append new element to array
    members.push(newMember);
    res.json(members);
})


// update Memeber
router.put('/:id',(req,res)=> {

    // return true or false
    const found = members.some(val => val.id === parseInt(req.params.id))

    if (found)
    {
        members.filter( (member) => {
        
            if(member.id === parseInt(req.params.id))
            {
                // update the value
                member.name = req.body.name? req.body.name : member.name 
                member.email = req.body.email? req.body.email : member.email

                res.json({ msg : 'Member updated',member})

            }

            else
            {
                res.status(400).json({msg:`No memeber with id ${req.params.id}`})
            }
        })

    }
    else
    {
        res.status(400).json({msg:`No memeber with id ${req.params.id}`})
    }
})


module.exports = router