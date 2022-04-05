var readline = require('readline-sync');

var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();

var shift = parseInt(readline.question('How many letters would you like to shift? '));

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');


let cipher = ''


function caesarCipher(){
    for(let i = 0; i < input.length; i++){
        let currentLetter = input[i]
        if(currentLetter === ' '){
            cipher += currentLetter;
            continue;
        }
        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + shift;
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = newIndex + 26;     
        if(input[i] === input[i].toUpperCase()){
            cipher += alphabet[newIndex];
        } 
        else cipher += alphabet[newIndex];
    }
    return cipher
} 
console.log(caesarCipher())

