const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect("mongodb+srv://walcol92:cruds@cluster0.osods.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("connected to mongoDB")
})

//get
app.use('/cruds', require("./routes/crudsRouter.js"))




app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})



app.listen(9000, () => {
    console.log("The server is running on Port 9000.")
})