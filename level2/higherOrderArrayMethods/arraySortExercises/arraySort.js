// 1) Sort an array from smallest number to largest

let numbers = [1, 3, 5, 2, 90, 20]

function leastToGreatest(arr){
    let result = arr.sort((a, b) => a - b)
    return result
    
}
  
  console.log(leastToGreatest(numbers)); // [1, 2, 3, 5, 20, 90]


//   2) Sort an array from largest number to smallest

// let numbers = [1, 3, 5, 2, 90, 20]

// function greatestToLeast(arr) {
//     let result = arr.sort((a,b) => b - a)
//     return result
//   }
  
//   console.log(greatestToLeast(numbers)); // [90, 20, 5, 3, 2, 1]




//   3) Sort an array from shortest string to longest

// let strings = ["dog", "wolf", "by", "family", "eaten"]

// function lengthSort(arr) {
//   let result = arr.sort((a,b) => a.length - b.length)
//   return result
//   }
  
//   console.log(lengthSort(strings)); // ["by", "dog", "wolf", "eaten", "family"]


//   4) Sort an array alphabetically

//  let strings = ["dog", "wolf", "by", "family", "eaten"]

// function alphabetical(arr) {
// let result = arr.sort()
// return result
// }

// console.log(alphabetical(strings)); // ["by", "dog", "eaten", "family", "wolf"]

// 5) Sort the objects in the array by age

function byAge(arr){
    let result = arr.sort((a,b) => a.age - b.age)
    return result
  }
  
  console.log(byAge([
      { name: "Quiet Samurai", age: 22 },
      { name: "Arrogant Ambassador", age: 100 },
      { name: "Misunderstood Observer", age: 2 },
      { name: "Unlucky Swami", age: 77 }
  ]));
  // => [ { name: 'Misunderstood Observer', age: 2 },
  //  { name: 'Quiet Samurai', age: 22 },
  //  { name: 'Unlucky Swami', age: 77 },
  //  { name: 'Arrogant Ambassador', age: 100 } ]