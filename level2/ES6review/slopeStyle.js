// const collectAnimals = (...animals) =>{
//     return animals
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]



// Write a function that returns a food object with the array names as properties. 
// You'll use an ES6 shorthand syntax that becomes useful when a variable name is 
// mentioned twice in both the name and value of properties in your object:


// const combineFruit = (fruit, sweets, ...vegetables) =>{
//     return {fruit, sweets, vegetables}
// }

// console.log(combineFruit(["apple", "pear"],["cake", "pie"],"carrot"))
//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    //  }


    // Use destructuring to use the property
    //  names as variables. Desructure the object in the parameter:
   
   
   
//     let travelLocation = {
//         location: "Burly Idaho",
//         duration: "2 weeks"};

//    let parseSentence = ({location, duration})=>{
//         return `We're going to have a good time in ${location} for ${duration}`
//       }
      
//     console.log(parseSentence(travelLocation))

   
   
   
   
    // Use array destructuring to make this code ES6:

    // let returnFirst = (items)=> {
    //     const firstItem = [...items[0]]
    //     return firstItem
    // }

    // console.log(returnFirst('first','second','third'))


    // Write destructuring code to assign variables that will help us return the expected string.
    //  Also, change the string to be using Template literals:

    
    // Write destructuring code to assign variables that will help us return the expected string.
    //  Also, change the string to be using Template literals:  
    
    
//     const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// let returnFavorites = (arr)=>{
//     let firstFav = favoriteActivities[0]
//     let secondFav = favoriteActivities[2]
//     let thirdFav = favoriteActivities[3] 
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
// }

// console.log(returnFavorites(favoriteActivities))

// Use the Rest and Spread Operator to help take any number of arrays, and return one array.
//  You will need to change how the arrays are passed in.
//  You may write it assuming you will always recieve three arrays if you would like to.

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// let combineAnimals = (allAnimals) => {
//     let result = allAnimals.concat(realAnimals, magicalAnimals, ...mysteriousAnimals)
//     return result
// }

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]



// Try to make the following function more ES6y:

// function product(a, b, c, d, e) {
//     let numbers = [a,b,c,d,e];
//     return numbers.reduce((acc, number)=>{
//         return acc * number;
//     }, 1)
// }
// console.log(product(1,2,3,4,5))  //120


// Make the following function more ES6y. Use at least both the rest and spread operators:

// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
//   }

// const numbers = [1,2,3,4,5]

// console.log(unshift([], ...numbers))
// Write some destructuring code to help this function out. 
// Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:



function populatePeople(names){
    let fullName = names.map(name => name.split(" "))
        return {
            firstName: firstName,
            lastName: lastName
        }

}

function populatePeople(names){
    let persons = names.map(name => {
            let newNameArr = name.split(" ")
       
             return {firstName: `${newNameArr[0]}`, lastName: `${newNameArr[1]}`}
            
        })
    
        return persons
    }


console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]