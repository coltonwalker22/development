const express = require('express')
const app = express()

app.use(express.json());

app.use("/groceries", require("./routes/groceriesRouter.js"))

app.listen(9000, () => {
    console.log("server is running on port 9000. Bing Bong.")
})