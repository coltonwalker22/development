// ES6 part 2

// fat arrow functions

// function sum(){

// }

// const sum2 = function(){

// }

// const sum2ES6 = word => console.log(`ES6 is ${word}!`)


// addEventListener("click", () =>{

// }



// object literals

// const blue = "blue"
// const green = "green"
// const red = "red"

// const colors = { red, green, blue,}

// console.log(colors)

// object destructuring

// const user = {
//     username: "joe123",
//     age: 20,
//     _id: "fe20984nikfds29348"
// }

// `Welcome ${user.username}`
//  data.users[0].user.name.firstName
//  user._id

// const {_id, username, age } = user

// console.log(username)

// const names = ["john", "betty", "nick"]

// const [item1, item2, item3] = names

// console.log(item2)



// default parameters

function sum(a = 5, b = 10){
    return a + b
}

console.log(sum(7))   // would output on default 15. if you put in jsut 7, 17.