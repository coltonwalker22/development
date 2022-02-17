// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const users = [
//     { name: "joe" },
//     { name: "julie" },
//     { name: "rick" }
// ]

// // .forEach

// const newArr = []


// const result = arr.forEach(function(num){
//     if(num % 2 === 0){
//         newArr.push(num)
//     }
// })

// arr.forEach(num => num % 2 === 0 && newArr.push(num))
// console.log(newArr)

// .find()

// const result = users.find(function(user){
//     if(user.name === "julie"){
//         return user
//     }
// })

// console.log(result)


// .findIndex()

const users = [
    { name: "joe" },
    { name: "julie" },
    { name: "rick" }
]

const userIndex = users.findIndex(function(user){
    if(user.name === "julie"){
        return true
    }
})

console.log(userIndex)