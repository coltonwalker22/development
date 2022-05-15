// First Express Server
const express = require("express")
const app = express()




// app.use("movies", express.json())

// middleware (for every request)//
app.use(express.json()) // looks for a request body, and turns it into 'req.body'


//ROUTES//
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvshowRouter.js"))


    //fake data


    // const users = [
    //     {name: "colton", age: 29},
    //     {name: "bolton", age: 40},
    //     {name: "jolton", age: 34},
    //     {name: "lolton", age: 19},
    //     {name: "zolton", age: 150}
    // ]



        // 1: PORT 2: CB FUNCTION
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})