const names = ["Jack", "John", "Jill", "Joseph", "Jackie"]

// .some()
// const result = names.some(function(name){
//     if(name[0] === "S"){
//         return true
//     }
// })

// console.log(result)

// .every()

// const result = names.every(function(name){
//     if(name[0] === "J")
//     return true
// })

// OR
const result = names.every(name => name[0] === "J")

console.log(result)