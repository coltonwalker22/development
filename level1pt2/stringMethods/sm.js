// JS String Methods

// Methods are Functions 
// String Methods are pre-built by Javascript, so all you have to do is use them!
// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_string.asp

let nameThing = "luke"


// toUpperCase & toLowerCase------------------------

// console.log(nameThing.toUpperCase())

                //OR

// let uppercasedLuke = nameThing.toUpperCase()
// console.log(uppercasedLuke)

// let lowercasedLuke = uppercasedLuke.toLowerCase()
// console.log(lowercasedLuke)

// conctat---------

// let s = "s"
//  let newNameThing = nameThing.concat(s)
// console.log(newNameThing)

// split - turns a string into an array----------------------

// let animal ="tiger"
// let characterArr = animal.split("g")    // if split("") empty quotes, will seperate each letter into an array. if say "g" it will remove and group letters into an arryay.
// console.log(characterArr)

// slice => cut up a string----------------

let phoneNumber = "6764567890" // 676-456-7890
let first3 = phoneNumber.slice(0,3)    //.concat("-") my attempt
let next3 = phoneNumber.slice(3,6)     //.concat("-") my attempt
let last4 = phoneNumber.slice(6)
let numberWithDashes = first3 + "-" + next3 + "-" + last4
console.log(numberWithDashes)
// console.log(first3, next3, last4) my attempt


//indexOf = I need to know if the letter "a" occurs in a string------------------

let city = "New York City"
let indexOfC = city.indexOf("!")
console.log(indexOfC)
