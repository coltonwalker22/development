const express = require('express')
const app = express()

app.use(express.json())

//ROUTES/

app.use("/guitars", require("./routes/guitarsRouter.js"))

app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})