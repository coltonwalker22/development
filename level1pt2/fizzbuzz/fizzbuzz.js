// Write a short program that prints each number from 1 to 100 on a new line.

// For each multiple of 3, print "Fizz" instead of the number.

// For each multiple of 5, print "Buzz" instead of the number.

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

//  example: 12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz16ect.

for (let i = 1; i <= 100; i++){
   if(i % 15 === 0){
       console.log("fizzbuzz")
   }
   else if(i % 5 === 0){
       console.log("buzz")
   }
   else if(i % 3 === 0){
       console.log("fizz")
   }
   else{
       console.log(i)}
}

const animals = ["lion", "giraffe", "hippo", "your mom"]

console.log(animals)