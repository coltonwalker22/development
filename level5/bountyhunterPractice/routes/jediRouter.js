const express = require('express');
const jediRouter = express.Router();
const uuid = require("uuid").v4;

const jedis = [
{firstName: "Kit",
lastName: "Fisto",
living: true,
credits: 459000,
type: "jedi",
 _id: uuid()},
 {firstName: "Plo",
lastName: "Koon",
living: true,
credits: 548000,
type: "jedi",
 _id: uuid()},
 {firstName: "Obi Wan",
lastName: "Kenobi",
living: true,
credits: 1985000,
type: "jedi",
 _id: uuid()},
 {firstName: "Aayla",
 lastName: "Secura",
 living: true,
 credits: 385000,
 type: "jedi",
  _id: uuid()}
]



    // get
    jediRouter.get("/", (req, res) =>{
        res.send(jedis)
    })

    // post 
    jediRouter.post("/", (req, res) => {
        const newJedi = req.body
        newJedi._id = uuid();
        jedis.push(newJedi);
        res.send(newJedi)
    })

    // put
    jediRouter.put("/:jediId", (req, res) => {
        console.log(req)
        const jediId = req.params.jediId
        const jediIndex = jedis.findIndex(jedi => jedi._id === jediId)
        const updatedJedi = Object.assign(jedis[jediIndex], req.body)
        res.send(updatedJedi)
    })

    // delete 
    jediRouter.delete("/:jediId", (req, res) => {
        const jediId = req.params.jediId
        const jediIndex = jedis.findIndex(jedi => jedi._id === jediId)
        jedis.splice(jediIndex, 1)
        res.send("You successfully deleted the jedi from the database.")
    })





module.exports = jediRouter