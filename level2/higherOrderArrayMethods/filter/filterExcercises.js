// Given an array of numbers, return a new array that has only the 
// numbers that are 5 or greater

let arr = [3, 6, 8, 2]

function fiveAndGreaterOnly(arr){
    let result = arr.filter(number => number > 5)  
    return result
   
  }
console.log(fiveAndGreaterOnly(arr)); /// [6, 8]


// arr.filter(function(number){
//   return number > 5
// }


//   Given an array of numbers, 
//   return a new array that only includes the even numbers.

let num = [3, 6, 8, 2]

function evensOnly(arr) {
   let result = arr.filter(even =>{
       if(even % 2 === 0){
           return even
       }
   })
return result
  }

//   function evensOnly(arr){
//         let result = arr.filter(even => even % 2 === 0)
//         return result
//   }

//   console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

  // test
//   console.log(evensOnly(num)); /// [6, 8, 2]

// Given an array of strings, return a new array 
// that only includes those that are 5 characters or fewer in length


let list = ["dog", "wolf", "by", "family", "eaten", "camping"]

function fiveCharactersOrFewerOnly(arr){ 
    let result = arr.filter(names => names.length <= 5)
    return result
    
  }
  // test
  console.log(fiveCharactersOrFewerOnly(list)); // ["by", "dog", "wolf", "eaten"]



//   4) Given an array of people objects, 
//   return a new array that has filtered out all those who don't belong to the club.


let list = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

function peopleWhoBelongToTheIlluminati(arr){
  let result  = arr.filter(club => club.member)
    return result
}

 
  console.log(peopleWhoBelongToTheIlluminati(list));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]

//   5) Make a filtered list of all the people
//    who are old enough to see The Matrix (older than 18)

let list = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

function ofAge(arr){
 let result = arr.filter(old => old.age >= 18)
    return result
  }


  console.log(ofAge(list));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]

  