// 1a) Write a function that returns the sum of two numbers. 
// Throw an error if either argument is not of the data type number:

// 1b) Call the sum function inside a try block using "1" and "2" as arguments. 
// Use console.log within a catch block to inform the user of the error.

function sum(x,y){
    if(isNaN(x) || isNaN(y)){
        throw new Error("thats not a number")
    }
    return x + y;
}

// try{
//     console.log(sum("c",2))
// }

// try{
//     console.log(sum(1,2))
// }


// catch(err){
//     console.log(err)
// }

// finally{
//     console.log("I'm running it dude.")
// }


// 2a) Given a user object, write a function called login that takes a username and password as parameters.
//  Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

// 2b) Call the login function within a try block. In one instance use the correct credentials, 
// and in another use incorrect ones. Make sure you see the appropriate message!

var user = {username: "sam", password: "123abc"};
function login(username, password){
  if(username !== "sam" || password !== "123abc"){
      throw new Error("invalid username or password")
  }
return "login successful!"
}




try{
    console.log(login("pam","123abc"))
}


catch(err){
    console.log(err)
}

finally{
    console.log("I'm still running it dude.")
}

