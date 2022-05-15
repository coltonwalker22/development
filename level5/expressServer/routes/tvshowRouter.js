const express = require('express');
const tvshowRouter = express.Router();
const uuid = require('uuid').v4

//fake data//

const tvShows = [
    {title: "Rick and Morty", _id: uuid()},
    {title: "Barry", _id: uuid()},
    {title: "Community", _id: uuid()},
    {title: "Nathan For You", _id: uuid()}
];

// tvshowRouter.get("/", (req, res) => {
//     res.send(tvShows)
// })

tvshowRouter.get("/tvShowId", (req, res) => {
    const tvshowId = req.params.tvshowId
    const foundShow = tvShows.find(show => show.id === tvShowId);
    res.send(foundShow)
})


tvshowRouter.post("/", (req, res) => {
    const newShow = req.body
    newShow._id = uuid();
    tvShows.push(newShow)
    res.send(`Succesfully add ${newShow.title} to the database!`)
})


module.exports = tvshowRouter