// Make an array of numbers that are doubles of the first array

const arr = [2, 5, 100]

function doubleNumbers(arr){
    return  arr.map(num => num * 2)
  }
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]



//   Take an array of numbers and make them strings

// const arr = [2, 5, 100]

// function stringItUp(arr){
//    return arr.map(num => `${num}`) // or num + ""
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


// // Capitalize each of an array of names

// arr = ["john", "JACOB", "jinGleHeimer", "schmidt"]


//   function capitalizeNames(arr){
//     return arr.map(string => string[0].toUpperCase() + string.toLowerCase().substring(1)) // string.slice(1).tolowercase()

//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]



//   Make an array of strings of the names

//  let arr = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]



// function namesOnly(arr){
//     return arr.map(pull => pull.name)
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
 


  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]





  //   Make an array of strings of the names saying whether or not they can go to The Matrix

// let test = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]



// let result = arr.map(matrixCheck =>{
//     if( matrixCheck.age < 18){
//         console.log(matrixCheck.name + "is not old enough")
//     }
//     else{console.log(matrixCheck.name + "can go into the matrix!")       
// }
// return matrixCheck     
// })    
// console.log(result)

//   function makeStrings(arr){
//     arr.map(matrixCheck =>{
//     if( matrixCheck.age < 18)
//     {console.log(matrixCheck.name + "is not old enough")}
//     else{
//         console.log(matrixCheck.name + "can go into the matrix!")
//     }
//     return matrixCheck
//   })}

// console.log(makeStrings(test))
        

  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]



  // Make an array of the names in h1s, and the ages in h2s

//  let list = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]


//   function readyToPutInTheDOM(arr){
//     let result = arr.map(tag => {
//         return `<h1>${tag.name}<h1><h2>${tag.age}<h2>`

//     })
//     return result
//   }
//   console.log(readyToPutInTheDOM(list));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]