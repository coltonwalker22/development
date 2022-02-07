// JS Array Methods--------------

// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_array.asp

// var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]


// push - adds item(s) to the end of the array ----------------



//  var newFoodArr = arrOfFoods.push("cereal")

//  console.log(newFoodArr)  <--- this gives us "6" in the terminal. 
// indicating it now has 6 items in the array.

// console.log(arrOfFoods)




// pop - removes item from the end of the array -----------------

// arrOfFoods.pop
// console.log(arrOfFoods)



// unshift - adds item(s) to the beginning of the array -------------------

// arrOfFoods.unshift("cereal")
// console.log(arrOfFoods)

// shift - removes item from the beginning of the array -----------------

// arrOfFoods.shift()
// console.log(arrOfFoods)

// concat ---------------------------------
    // let colors1 = ["blue", "green"]
    // let colors2 = ["purple", "red"]
    // let newArr = colors1.concat(colors2)
    // console.log(newArr)

// indexOf ------------------------

// var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]

// let pizzaIndex = arrOfFoods.indexOf("pizza") // gives us 3, pizza is in the 3rd place of  the index
// console.log(pizzaIndex)

// let pizzaIndex = arrOfFoods.indexOf("popsicle") // gives us -1 cause it does not find it in the array
// console.log(pizzaIndex)
// slice

// let newArr = arrOfFoods.slice(1, 3)

// console.log(newArr) // takes the index items and puts them in a new array

// join -------------------------------------


// let name = 'steve'
// let splitName = name.split("")
// let joinedName = splitName.join("-")
// console.log(joinedName)

// reverse ----------------------------------------------

// var name = "rick" //kcir
// let splitName = name.split("")
// let reversedArr = splitName.reverse()
// let reversedName = reversedArr.join("")
// console.log(reversedName)

// let allAtOnce = name.split("").reverse().join("")
// console.log(allAtOnce)

// splice- change the original array --------------------------------

var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]

// arrOfFoods.splice(2, 2)  
// numbers represent where to start on index and how many to remove.
// (starts at icecream and takes out two / pizza)
// console.log(arrOfFoods)

var result = arrOfFoods.splice(2, 2, "bacon") // <--- after the two arguments, you can add whats been taken out
console.log(arrOfFoods)