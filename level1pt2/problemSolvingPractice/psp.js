//1. Write a function that takes an array of numbers and returns the largest (without using `Math.max()`)
// largest([3, 5, 2, 8, 1]) // => 8


let arr = [8, 2, 64, 24, 52, 105];
temp = 0;

arr.forEach((element) => {
    if (temp < element){
        temp = element;
    }
});

// console.log(temp)

//2.Write a function that takes an array of words 
//and a character and returns each word that has that character present.

// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]


let lettersWithStrings = ["#3", "$$$", "C%4!", "Hey!"]

console.log("the better way",lettersWithStrings.filter(s => s.includes("!")))


function pullString(arr, specialChar) {
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].includes(specialChar)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(pullString(lettersWithStrings,"!"))



//3. Write a function that takes a num1 and num2 
//   and returns whether num1 is divisible by num2.


function check(num1, num2){
    if (num1 % num2 === 0){
      return  "yes"
    }
    else{
       return "no"
    }
}
// console.log(check(8,2))