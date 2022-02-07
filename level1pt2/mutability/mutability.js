// Mutability and Types


// Immutable - cannot be changed => passed by value
    // String
    // Numbers
    // Booleans
    let age = 10
    let otherAge = age
    otherAge = 12 

    // console.log(age)

// Mutable containers => passed by a refrence 
    // Array
    // Object

 var arr = [1, 2, 3, 4, 5]
    
    var person = {
        name: "harry",
        age: 12
    }

    // var newPerson = person
    // newPerson.hasWand = true 
    // console.log(person)  

// typeof - returns the type of the data immediately to its right

console.log (typeof person) // outputs "object"
console.log (typeof "rick") // outputs "string"
console.log (typeof 10) // outputs number
console.log ( typeof [1, 2, 3, 4]) //outputs "object"