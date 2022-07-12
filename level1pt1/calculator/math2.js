const readline = require("readline-sync")

// questionInt is taken from a dependency, can only take in integers
let num1 = readline.questionInt("What is your first number?")

let num2 = readline.questionInt("Waht is your second number?")


//below are functions used for the 4 operators, provided are the paramters in teh function,
// and returning a argument.
function add (x,y){
    return x + y;
}

function sub (x,y){
    return x - y;
}

function mul (x,y){
    return x * y;
}

function div (x,y){
    return x / y;
}


// a variable that is decalred statment to an array of operators
let operator = ["add", "sub", "mul", "div"];
    


//keyInSelect allows to choose within the array index, and asks a question with a string
let index = readline.keyInSelect(operator,'which operation?')

// the function of choice is given that if a item is chosen in the array, then "do this".
// example: if add is chosen in the operator variable, then show that the add function
// is num1 + num2 that is designed from function add()
function choice(){
    if(operator[index] === "add"){
        console.log(add(num1, num2));
    }
    if(operator[index] === "sub"){
        console.log(sub(num1, num2));
    }
    if(operator[index] ==="mul"){
        console.log(mul(num1, num2));
    }
    if(operator[index] ==="div"){
        console.log(div(num1, num2));
    }
}

choice()
