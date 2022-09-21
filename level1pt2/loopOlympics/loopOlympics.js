// PRELIMINARIES //

//1. Write a for loop that prints to the console the numbers 0 through 9.

// for (let i = 0; i < 10; i++){
//     console.log(i)
// }

// 2. Write a for loop that prints to the console 9 through 0.

// for( let i = 9; i > 0; i--){
//     console.log(i)
// }

//3.  Write a for loop that prints these fruits to the console. 

// const fruit = ["banana", "orange", "apple", "kiwi"]

// for (let i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }


//  BRONZE //

// 1. Write a for loop that will push the numbers 0 through 9 to an array.


// const myArray = [];


// for (i = 0; i < 10; i++){
//     myArray.push(i);
// }
// console.log(myArray)

 


//2.  Write a for loop that prints to the console only even numbers 0 through 100.

// for(i = 0; i < 101; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }

// for(let n = 21; n < 30; n+=2){          // example for odd numbers
//     console.log(n) 
// }

// 3. Write a for loop that will push every other fruit to an array.

// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// function skipFruit(array){
//         let newArr = []
//         for(let i = 0; i <= array.length; i+=2){
//             newArr.push(array[i])
//         }
//         return newArr.join(", ")
//     } 
//     console.log(skipFruit(fruit))



//     1. Create an array that mimics a grid like the following using nested `for` loops:

// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]

// const zeros = [0, 0, 0]


// function zeroArray(array){
//     let newArr = []
//     for(let i = 0; i <= array.length; i++){
//         newArr.push(array[i])
//     }

// }


// console.log(zeroArray(zeros))


// row = [];
// newArray = [];
// for (let i = 0; i < 3; i++) {  // i sets the amount of arrays
//   for (j = 0; j < 1; j++) {  // j sets the amount to a single array, holding row
//     row.push(0);
//   }
//   newArray.push(row);
// }
// console.log(newArray);

row = [];
newArray = [];
for (let i = 0; i < 3; i++) {
  for (j = 0; j < 1; j++) {
    row.push([i]);
  }
  newArray.push(row);
}
console.log(newArray);