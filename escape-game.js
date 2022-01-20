var readlineSync = require('readline-sync')

var username = readlineSync.question('What is your name?')

var greeting = readlineSync.question('Hello '+ username + ', welcome to the room! press ENTER to continue.')


 
let foundKey = false
let options = ['Find the key.','open the door.','put your hand in the hole.']

console.log('You are trapped in a room.' )



function askQuestion(){
    choice = readlineSync.keyInSelect(options,'What do you do!?')
    makeChoice()
}

askQuestion()

function makeChoice(){
    if(choice === 0){
        console.log('you found the key!')
        foundKey = true
        askQuestion()
    } else if(choice === 1 && foundKey){
        console.log('You escape the room')
    } else if(choice === 2){
        console.log('you dead lol')
    } else{
        console.log('The door is locked')
        askQuestion()
    }
}

/* -----goes after the other else if statements-----
 else if(choice === 1 && !foundKey){
        console.log('The door is locked')
        askQuestion() */


        