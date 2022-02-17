//HEADER CONTENT

let header = document.getElementById('header')

header.textContent = "Welcome to the DJ Javascript!"
header.style.textAlign = "center"
header.style.border = "5px solid black"
header.style.padding = "100px"
header.style.fontSize = "100px"
header.style.backgroundColor = "blue"
header.style.color = "black"

// MAIN CONTAINER WITH COLORED SQUARES//

let container = document.getElementById('container')
container.style.border = "3px solid black"
container.style.padding = "100px"
container.style.backgroundColor = "grey"
container.style.display = "grid"
container.style.gridTemplateColumns = "repeat(5, auto)"
container.style.gridTemplateRows = "100px"
container.style.textAlign = "center"
container.style.gap = "10px"
container.style.marginBottom = "500px"



// COLORED SQUARES

let blueSquare = document.getElementById('blueSquare')
blueSquare.style.border = "2px solid black"
blueSquare.style.grid.column = " 1 / 2 "
blueSquare.style.padding = "5px"
blueSquare.style.textAlign = "center"


let redSquare = document.getElementById('redSquare')
redSquare.style.border = "2px solid black"
redSquare.style.grid.column = " 2 / 3 "
redSquare.style.padding = "5px"
redSquare.style.textAlign = "center"


let yellowSquare = document.getElementById('yellowSquare')
yellowSquare.style.border = "2px solid black"
yellowSquare.style.grid.column = " 3 / 4 "
yellowSquare.style.padding = "5px"
yellowSquare.style.textAlign = "center"


let greenSquare = document.getElementById('greenSquare')
greenSquare.style.border = "2px solid black"
greenSquare.style.grid.column = " 4 / 5 "
greenSquare.style.padding = "5px"
greenSquare.style.textAlign = "center"


let orangeSquare = document.getElementById('orangeSquare')
orangeSquare.style.border = "2px solid black"
orangeSquare.style.grid.column = " 5 / 6 "
orangeSquare.style.padding = "5px"
orangeSquare.style.textAlign = "center"

// FOOTNOTE SO I CAN SCROLL //



// EVENT LISTENERS

// document.getElementById("blueSquare").addEventListener(,"click", function(){
//     console.log("You Clicked me!")
// })

// document.getElementById("blueSquare").addEventListener("click,", function(){
//     blueSquare.style.backgroundColor = "blue";
// })

//BLUE SQUARE//

let blueSqr = document.getElementById('blueSquare')

blueSquare.addEventListener("mouseenter", () => 
blueSqr.style.backgroundColor ="blue")

blueSquare.addEventListener("mouseleave", () =>
blueSqr.style.backgroundColor = "grey")


//RED SQUARE//

let redSqr = document.getElementById('redSquare')

redSquare.addEventListener("mousedown", () =>
redSqr.style.backgroundColor ="red")

redSquare.addEventListener("mouseup", () =>
redSqr.style.backgroundColor ="grey")

//YELLOW SQUARE//

let yellowSqr = document.getElementById('yellowSquare')

yellowSqr.addEventListener("mouseup", () =>
yellowSqr.style.backgroundColor="yellow")

yellowSqr.addEventListener("mouseenter", () =>
yellowSqr.style.backgroundColor ="grey")


//GREEN SQUARE//

let greenSqr = document.getElementById('greenSquare')

greenSqr.addEventListener('dblclick', () =>
greenSqr.style.backgroundColor="green" )

greenSqr.addEventListener("mouseenter", () =>
greenSqr.style.backgroundColor ="grey")

//ORANGE SQUARE//

let orangeSqr = document.getElementById('orangeSquare')

window.addEventListener('scroll', () =>
orangeSqr.style.backgroundColor = "orange")

orangeSqr.addEventListener("mouseenter", () =>
orangeSqr.style.backgroundColor ="grey")


// KEY EVENTS

window.addEventListener("keydown", pressedkey,);

function pressedkey(key){
    if(key.keyCode == 66){
        blueSquare.style.backgroundColor ="blue"
    } else if(key.keyCode == 82){
        redSquare.style.backgroundColor ="red"
    } else if(key.keyCode == 89){
        yellowSquare.style.backgroundColor ="yellow"
    } else if(key.keyCode ==71){
        greenSquare.style.backgroundColor ="green"
    } else if(key.keyCode == 79){
        orangeSquare.style.backgroundColor ="orange"
    }
}