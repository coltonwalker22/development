var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// 1. Remove the last item from the vegetable array.

vegetables.pop()
// console.log(vegetables)

// 2. Remove the first item from the fruit array.

fruit.shift()
// console.log(fruit)

// 3. Find the index of "orange."

let orangeIndex = fruit.indexOf("orange")
// console.log(orangeIndex)

// 4. Add that number to the end of the fruit array.
// (use push)

let newFruit = fruit.push(1)
// console.log(fruit)

// 5. Use the length property 
// to find the length of the vegetable array.

let veggieNumber = vegetables.length


// 6. Add that number to the end of the vegetable array.

let veggies = vegetables.push(3)
// console.log(vegetables)

// 7. Put the two arrays together into one array.
//  Fruit first. Call the new Array "food".

let fruitArr = [ 'apple', 'orange', 'watermelon', 1 ]
let veggieArr = [ 'carrot', 'tomato', 'pepper', 3 ]

let food = fruitArr.concat(veggieArr)
// console.log(food)

// 8. Remove 2 elements from your 
// new array starting at index 4 with one method.

food.splice(4, 2)
// console.log(food)

// 9. Reverse your array.

food.reverse()

// console.log(food)

let finalFood = food.toString()

console.log(finalFood)