const express = require('express')
const app = express()
const uuid = require('uuid').v4
const morgan = require('morgan')

const toDos = [
    {name: "vacuum", 
    description: "upstairs and downstairs need done.",
    completed: false,
    _id: uuid()
    },
    {name: "repair front door.", 
    description: "Frame is falling apart.",
    completed: false,
    _id: uuid()
    },
    {name: "Bathroom fan inop", 
    description: "Fan in masterbedroom bathroom does not run.",
    completed: false,
    _id: uuid()
    }
]


app.use(express.json()) // looks for a request body, and turns it into 'req.body'
app.use(morgan('dev')) // logs requests tp the console.

app.use("/toDos", (req, res, next) =>{
    console.log("the todos middleware was exectued")
    next()
})

//Get all 
app.get("/toDos", (req, res) => {
    console.log("get request received")
    res.send(toDos)
})


//Get one
app.get("/toDos/:todoId", (req, res) => {
    const toDoId = req.params.todoId
    const foundToDo = toDos.find(toDo => toDo._id === toDoId)
    res.send(foundToDo)
})

//post
app.post("/toDos", (req, res) => {
    const newToDo = req.body
    newToDo._id = uuid()
    toDos.push(newToDo)
    res.send(`Successfully added ${newToDo.name} to the list.`)
})

// Put
app.put("/toDos/:toDoId", (req, res) => {
    const toDoId = req.params.toDoId
    const toDoIndex = toDos.findIndex(toDo => toDo._id === toDoId)
    const updatedId = Object.assign(toDos[toDoIndex], req.body)
    res.send(updatedId)
})

// delete
app.delete("/toDos/:toDoId", (req, res) => {
    const todoItem = req.body
    const toDoId = req.params.toDoId
    const toDoIndex = toDos.findIndex(toDo => toDo._id === toDoId)
    toDos.splice(toDoIndex, 1)
    res.send(`Successfully deleted ${todoItem.name}`)
})

app.listen(9000, () => {
    console.log("server is running on port 9000. Bing Bong.")
})

