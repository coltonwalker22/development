const readline = require("readline-sync")

let num1 = readline.questionInt('please enter your first number:')

let num2 = readline.questionInt('please enter in your second number:')


function add (x,y){
    return x + y
}


let operator = ['+','-','*','/'],
    index = readline.keyInSelect(operator,'which operation?')

switch (operator[index]){
    case '+':
        console.log(`${num1}+${num2}=${add(num1,num2)}`)
        break;
    case '-':
        console.log(num1, operator[index], num2, ('='), num1 - num2)
        break;
    case '*':
        console.log(num1, operator[index], num2, ('='), num1 * num2)
        break;
    case '/':
        console.log(num1, operator[index], num2, ('='), num1 / num2)
}

