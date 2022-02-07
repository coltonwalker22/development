// Write a function that takes a string as a parameter and returns the same string 
// in all capital letters followed by all lowercase letters
let test = "gfhnedfswkjhndsenvsgregegegr"

let firstName = "colton"



function cap(string){
    let result = string.toUpperCase()
    return result + " " + string
}

console.log(cap(firstName))

// console.log(combined)

// Write a function that takes a string as a 
// parameter and returns a number that is half the string's length, rounded down.

function letsCount (string){
   let x;
   x = Math.floor(string.length / 2)  // OR  x= string.length / 2 return math.floor(x)
   return x
}
// console.log(letsCount(test))


// Write a function that uses slice() and the other 
// functions you've written to return the first half of the given string.

function sliceName (string){
    let x;
    if (x = string.slice(0,3))
    return x
}
// console.log(sliceName(firstName))

// Write a function that takes a string as a 
// parameter and returns that string where the first half is capitalized, 
// and the second half is lowercase.

function halfCap(string){
    let x = Math.floor(string.length / 2)
    let firstHalf = string.slice(0, x)
    let secondHalf = string.slice(x)
    return firstHalf.toUpperCase() + secondHalf.toLowerCase()
}

// console.log(halfCap())