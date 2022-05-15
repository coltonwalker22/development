const express = require('express')
const guitarRouter = express.Router()
const uuid = require('uuid').v4


const guitars = [
    {type: "stratocaster", brand: "fender", price: 900, _id: uuid()},
    {type: "telecaster", brand: "fender", price: 550, _id: uuid()},
    {type: "jazzmaster", brand: "fender", price: 1200, _id: uuid()},
    {type: "Les Paul", brand: "gibson", price: 3000, _id: uuid()},
    {type: "SG", brand: "gibson", price: 2500, _id: uuid()},
    {type: "Gio", brand: "ibanez", price: 400, _id: uuid()},
    {type: "Premium", brand: "ibanez", price: 1400, _id: uuid()},
    {type: "super-sonic", brand: "squire", price: 459, _id: uuid()},
    {type: "Telecater Deluxe", brand: "squire", price: 299, _id: uuid()}
]

    //1. Endpoint (mount path)
    //2. Callback functio
guitarRouter.get("/", (req, res) => {
    res.send(guitars)
})

// GET One

guitarRouter.get("/:guitarId", (req, res) => {
    const guitarId = req.params.guitarId;
    const foundGuitar = guitars.find(guitar => guitar._id === guitarId);
    res.send(foundGuitar)
})

// get by brand name

guitarRouter.get("/search/brand", (req, res) => {
    const brand = req.query.brand
    const filteredGuitars = guitars.filter( guitar => guitar.brand === brand);
    res.send(filteredGuitars)
})

// get by filtered price
// guitarRouter.get("/search/price", (req, res) => {
//     const filteredPrice = guitars.price.filter(value => { 
//         value.price.type === req.query.type
//     })
// })


// post one
guitarRouter.post("/", (req, res) => {
    const newGuitar = req.body;
    newGuitar._id = uuid();
    guitars.push(newGuitar);
    res.send(`Successfully added ${newGuitar.type}`)
})


module.exports = guitarRouter