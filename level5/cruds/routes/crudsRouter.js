const express = require('express')
const mongoose = require('mongoose')
const crudsRouter = express.Router()
const Crud = require('../model/crud.js')

//get all 


crudsRouter.get("/", (req, res, next) => {
    Crud.find((err, foundCrud) => {
        if (err) {
            res.status(500)
            return next(err)
        }
            return res.status(200).send(foundCrud)
    })
})

crudsRouter.post("/", (req, res, next) => {
    const newCrud = new Crud(req.body)
    newCrud.save((err, savedCrud) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(savedCrud)
    })
})



module.exports = crudsRouter