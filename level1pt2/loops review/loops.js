/**
 * QUIZ:
 * 
 * 1. Why do programmers care about loops? What are they good for?
 * 
 * allow a programmer to run the same code many times.
 * 
 * 2. In a for loop, what are the 3 main parts that go into the parentheses?
 * 
 * 
 * 
 * 3. Write a loop that logs the numbers 15 to 50 (inclusive) to the console.
 * 
 * 
 * 4. Write a loop that logs the numbers 0 to 10 (inclusive) to the console, but if the number is 7, also log "It's your lucky day!"
 */

//  for (/*initiailize variables, 2. condition - should I run more time? 3. final code that we want
//     to run at the end of the loop) {
//     ...

//3.
//    1.            2.      3.
for(let i = 15; i <= 50; i = i++){
    console.log(i)

}

for(let i = 0; i <= 10; i++){
    console.log(i)
    if(i === 7){
        console.log("its your lucky day!")
    }
}
