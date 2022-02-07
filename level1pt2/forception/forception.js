/* creating a loop within a loop, where after each name, each letter
is printed each as a string */


var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


// thought process

//1. seperate each letter as a string in alphabet
//2. create a each string as an array.
//3. concatenate both arrays.
//4. using both as a function, after each name, run the alphabet.






function forception(arr1, arr2){
    let arr =[]
      for (let i = 0; i <= arr1.length; i++){
            arr.push(arr1[i])
        for (let j = 0; j <= arr2.length; j+=1){
            arr.push(arr2[j])
        }
      }

    return arr
}
console.log(forception(people, alphabet))

