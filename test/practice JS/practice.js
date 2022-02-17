const readline = require("readline-sync")

let num1 = readline.questionInt("what is your first number?")

let num2 = readline.questionInt("what is your second number?")

function add(x,y){
    return (x + y)
}

function sub(x,y){
    return (x - y)
}

function div(x,y){
    return (x / y)
}

function mul(x,y){
    return (x * y)
}

operator = ["add","sub","mul","div"]

index = readline.keyInSelect(operator, "which operator?")

function choice(){
    if(operator[index] === "add"){
        console.log(add(num1, num2));
    }
    if(operator[index] === "sub"){
        console.log(sub(num1, num2));
    }
    if(operator[index] === "div"){
        console.log(div(num1, num2));
    }
    if(operator[index] === "mul"){
        console.log(mul(num1, num2));
    }
}

choice()
