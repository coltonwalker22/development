const express = require('express')
const mongoose = require('mongoose')
const bountiesRouter = express.Router()
const Bounty = require('../models/bounty.js') //bounty.js is the model


// GET all
bountiesRouter.get("/", (req, res, next) => {
    // res.send("get request works")
    
    Bounty.find((err, foundBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
         return res.status(200).send(foundBounty)
    })
})

// Get by type/alignment
bountiesRouter.get("/search/type", (req, res, next) => {
    Bounty.find({type: req.query.type}, (err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

// Get by living name
// bountiesRouter.get("/search/isLiving", (req, res, next) => {
//     Bounty.find({isLiving: req.query.isLiving}, (err, bounties) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(bounties)
//     })
// })

// POST
bountiesRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(savedBounty)
    })
})

// DELETE one
bountiesRouter.delete("/:bountyId", (req, res) => {
    Bounty.findOneAndDelete({ _id: req.params.bountyId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`successfully deleted item ${deletedItem.firstName} from the database.`)
    })
})

// PUT (update) one
bountiesRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId}, // find this one to update
        req.body, // update the object with this data
        {new: true}, // send back the updated version please
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next
            }
            return res.status(201).send(updatedBounty)
        }
    )
})
 

module.exports = bountiesRouter