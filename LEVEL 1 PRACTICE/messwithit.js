let readlineSync = require('readline-sync')


let foundKey = false
let choices = ['open the door.','put your hand in the hole.']

console.log('You are trapped in a room.' )

let choice 

function askQuestion(c){
    choice = readlineSync.keyInSelect(c,'What do you do!?')
    makeChoice()
    
}

askQuestion(choices)

function makeChoice(){
    if(choices[choice] === 'Find the key.'){
        console.log('you found the key!')
        foundKey = true
        choices = ['open the door.','put your hand in the hole.']
        askQuestion(choices)
    } else if(choices[choice] === 'open the door.' && foundKey){
        console.log('You escape the room')
    } else if(choices[choice] === 'put your hand in the hole.'){
        console.log('you dead lol')
    } else{
        console.log('The door is locked, you need to find the key.')
        choices = ['Find the key.','open the door.','put your hand in the hole.']
        askQuestion(choices)
    }
}