// const words = ['hello', 'racecar', 'world', 'goodbye', 'rats live on no evil star'];

// words.forEach( word => {

// if( word === reverseWord(word)){
//  console.log(word)
// }

// })

// function reverseWord(word){
// let reversed = [];


// for(let i = word.length - 1; i >= 0; i--){
//     reversed.push(word[i]);

// }

// return reversed.join('')

// }



// console.log(words.map(l => l))



// Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array.

// function arrayOfMultiples(num, length){

//     const resultArray = [];
//     for(let i = 1; i <= length; i++){
//         resultArray.push(i*num)

//     }


//     return resultArray;
// }


// console.log(arrayOfMultiples(12,10))


// Create a function that determines whether a number is Oddish or Evenish. 
// A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. 
// If a number is Oddish, return "Oddish". Otherwise, return "Evenish". You can assume that all input values will be positive whole numbers.

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5

// Sample data for testing: 
// console.log(oddishOrEvenish(43)) 
// // 4 + 3 = 7
// // "Oddish"

// console.log(oddishOrEvenish(373)) 
// // 3 + 7 + 3 = 13
// // "Oddish"

// console.log(oddishOrEvenish(4433)) 
// // 4 + 4 + 3 + 3 = 14
// // "Evenish"

// console.log(oddishOrEvenish(1020403)) 
// 1 + 0 + 2 + 0 + 4 + 0 + 3 = 10
// "Evenish"

// function oddishOrEvenish(num){
//     const numToString = String(num);
//     let total = 0
//     for( let i = 0; i < numToString.length; i++ ){
//     total += Number( numToString[i]); 
//     }
//     return !(total % 2) ?  "evenish" : "oddish";
// }

// function oddishOrEvenish(num){
//     const numToString = String(num);
//     let total = numToString.split('').reduce((t, n) => t + Number(n))
//     return total % 2 === 0 ?  "evenish" : "oddish";

// }


// console.log(oddishOrEvenish(5454))


// Today's code challenge (also lmk if this was too easy and I'll pick something harder next week):
// Write a function that takes two arrays and adds the first element in the first array with the first element in the second array,
//  the second element in the first array with the second element in the second array, etc, etc. 
// Return true if all element combinations add up to the same number. Otherwise, return false.

// Notes
// Each array will have at least one element.
// Return false if both arrays are of different length.
// Extra challenge (optional)
// Only run through the arrays ONCE. Stop iterating through the array once there's a mismatch





function puzzlePieces(arr1, arr2){
    if(!(arr1.length === arr2.length)){
        return "false: arrays are different lengths"
    } else{
    let sum = arr1.map((num, i ) => {
        return num + arr2[i];
    })
    const result = sum.every(element => element === sum[0] ? true : false);
    //  const result = sum.every(element => {
    //      if (element === sum[0]) {
    //          return true;
    //      } else {
    //          return false;
    //      }        
    //  })
     return result
    }
}




console.log(puzzlePieces([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]))