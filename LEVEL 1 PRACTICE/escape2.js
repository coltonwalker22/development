var readlineSync = require('readline-sync')

let foundkey = false

let options = ['you find the key','open the door','put your hand in the hole']

console.log('You are trapped in a room')

function askQuestion(){
    choice = readlineSync.keyInSelect(options,'what do you do?')
    makechoice()
}

askQuestion()

function makeChoice(){
    
}