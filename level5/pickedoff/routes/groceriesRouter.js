const express = require('express')
const groceriesRouter = express.Router()
const uuid = require('uuid').v4

const food = {item: "banana", price: 1, _id: uuid()}


groceriesRouter.use("/", (req, res, next) => {
    console.log("The items middleware has executed")
    next()
})


groceriesRouter.use("/", (req, res, next) => {
    req.body = {item: "banana"}
    next()
})

groceriesRouter.get("/", (req, res, next) => {
    console.log(" get request received")
    res.send(food)
})

module.exports = groceriesRouter
