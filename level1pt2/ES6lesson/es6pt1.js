// ES6 Part 1


// const and let

var name = "steve"

const firstName = "joe"
// firstName = "steve"
let age = 12
// age = 13

// Global, Local
function someFunc(){
    let a 
   if(2 === 2){
        a = "hello"
   }
   console.log(a)
}

// someFunc()

// spread and rest(gather) operators
    // syntax: ...
function maxNumber(...nums){
    console.log(nums)
}

maxNumber(0, 3, 58, 20)

//objects and arrays
const colors1 = ["red", "blue"]
const colors2 = ["yellow", "green"]

const allColors = [...colors1, ...colors2]

console.log(allColors)

const person = {
    name: "rick",
    age: 50
}

const personCopy = { ...person }
console.log(personCopy)
// template literals
"string" + "s"
'string'
`string`

const name = "joe"
const greeting = `hi ${name}`
console.log(greeting)

// import & export
require()
module.exports