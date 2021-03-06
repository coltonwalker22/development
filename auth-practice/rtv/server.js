const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt: jwt} = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jsw3x.mongodb.net/?retryWrites=true&w=majority`,
    (err) => {
        if (err) throw err
        console.log("Connected to the database")
    }
)

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', jwt({secret: process.env.SECRET, algorithms: ["HS256"]}))
app.use('/api/user', require('./routes/userRouter.js'))
app.use('./api/user/comment', require('./routes/commentrouter.js'))
app.use('./api/user/comment', require('./routes/commentrouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


app.listen(process.env.MY_VAR || 9000, () => {
    console.log('server is running on local port 9000')
})