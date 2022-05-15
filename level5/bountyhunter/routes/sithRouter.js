const express = require('express');
const sithRouter = express.Router();
const uuid = require('uuid').v4

const siths = [
     {firstName: "Darth",
    lastName: "Maul",
    living: true,
    credits: 478000,
    type: "sith",
     _id: uuid()},
     {firstName: "Darth",
    lastName: "Bane",
    living: true,
    credits: 557000,
    type: "sith",
     _id: uuid()},
     {firstName: "Darth",
    lastName: "Vader",
    living: true,
    credits: 8569000,
    type: "sith",
     _id: uuid()}
]


sithRouter.route("/")


sithRouter.get("/", (req, res) =>{
        res.send(siths)
    })

// post
sithRouter.post((req, res) => {
        const newSith = req.body
        newSith._id = uuid();
        siths.push(newSith);
        res.send(`Succesfully added ${newSith.type} to the database`)
    })

//Put
sithRouter.put("/:sithId", (req, res) => {
    const sithId = req.params.sithId
    const sithIndex = siths.findIndex( sith => sith._id === sithId)
    const updatedSith = Object.assign(siths[sithIndex], req.body)
    res.send(updatedSith)
})

//delete one
sithRouter.delete("/:sithId", (req, res) => {
    const sithId = req.params.sithId
    const sithIndex = siths.findIndex(sith => sith._id === sithId)
    siths.splice(sithIndex, 1)
    res.send("sith successfully deleted from the database.") 
})

module.exports = sithRouter