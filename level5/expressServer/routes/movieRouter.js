const express = require('express')
const movieRouter = express.Router()
const uuid = require('uuid').v4

const movies = [
    {title: "die hard", genre: "action", _id: uuid()},
    {title: "star wars IV", genre: "fantasy", _id: uuid()},
    {title: "Bambi III: bambis revenge", genre: "drama", _id: uuid()},
    {title: "jason", genre: "horror", _id: uuid()},
]

    //1. Endpoint (mount path)
    //2. Callback function
    movieRouter.get("/", (req, res) => {
        res.send(movies)
    })
    
    // Get One
    movieRouter.get("/:movieId", (req, res) => {
        // console.log(req.params.id)
        const movieId = req.params.movieId
        const foundMovie = movies.find(movie => movie._id === movieId)
        res.send(foundMovie)
    })

    // Get by genre
    movieRouter.get("/search/genre", (req, res) => {
        const genre = req.query.genre
        const filteredMovies = movies.filter(movie => movie.genre === genre)
        res.send(filteredMovies)
    })




    // post one
    movieRouter.post("/", (req, res) => {
        const newMovie = req.body
        newMovie._id = uuid()
        movies.push(newMovie)
        res.send(`Successfully added ${newMovie.title} to the database`)
    })


    //delete One
    movieRouter.delete("/:movieId", (req, res) => {
        const movieId = req.params.movieId
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        movies.splice(movieIndex, 1)
        res.send("Successfully deleted movie!")

    })

    // Put One
    movieRouter.put("/:movieId", (req, res) => {
        const movieId = req.params.movieId
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        const updatedMovie = Object.assign(movies[movieIndex], req.body)
        res.send(updatedMovie)
    })

    // movieRouter.route("/")
    //     .get((req, res) => {
    //         res.send(movies)
    //     })
    //     .post((req, res) => {
    //         const newMovie = req.body
    //         newMovie._id = uuid();
    //         movies.push(newMovie);
    //         res.send(`Succesfully added ${newMovie.title} to the database`)
    //     })





module.exports = movieRouter