const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express();


app.use(express.json())
app.use(morgan('dev'))


//routes

// Connect to mongoose
mongoose.connect("mongodb+srv://walcol92:bounty@firstproject.vuoax.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("connected to mongoDB")
} )

//get
app.use("/bounties", require("./routes/bountiesRouter.js"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(9000, () => {
    console.log('The server is running on Port 9000. This is the way.')
})