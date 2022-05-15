const express = require('express');
const app = express();
const morgan = require('morgan');

//middleware (for every request)
app.use(express.json()) //looks for a request body, turns into a 'req.body'
app.use(morgan('dev')) // logs request to the console
//ROUTES//

app.use("/jedi", require("./routes/jediRouter.js"))
app.use("/sith", require("./routes/sithRouter.js"))

// 1. PORT 2. CB FUNCTION
app.listen(9000, () => {
    console.log("The server is running on Port 9000. This is the way.")
})