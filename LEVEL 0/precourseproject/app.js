//Data Types - Create variable for each data type below using the example provided for a string

//String - denoted/represented by " " ' ' - they are great for words,language
let firstname = 'colton'
console.log(firstname)

//Number - anything of numerical value - just a number
let age = 29
console.log(age)

//Boolean - true or false 
/////////
let coltonIsCool = false
console.log(coltonIsCool)

//Array - are denoted/represented by [] - are great for holding multple pieces of data
//use bracket notation [] here with the array you created use 
/////////
let favoritegames = ['halo', 'SW: shadow of the empire', 'witcher 3', 'metal gear solid:V', 'fallout 3']
console.log(favoritegames[1])


//Object - denoted/represented by {} - great for describing something in detail - like a billing address
// use dot notation . here with the object you created .
//////////
let airplane = {
    model: "A10",
    isUseful: true,
    sounds: ['BRRRRT', 'WWWOOOSHH', 'NNNEEERRROOOO']

}
console.log(airplane.model)
console.log(airplane.isUseful)
console.log(airplane.sounds[0])
console.log(airplane)
console.log(airplane, airplane.sounds)


//Condtional Statement
//if (this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}
//using the variable provided below create a condional statement
//Using below example below to create your own conditional statement.

let sport = 'football'

if (sport === "football") {
    console.log("football is the only sport!")
} else if (sport === "baseball")
    console.log("Football is not the only sport!")
else {
    console.log("Wow! theres more than one sport!")
}
console.log(sport === "football" ? "football is the only sport!" : "football is not the only sport!")

// /////////
//For Loops - At their most elemetary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i
//for (#1Step start point; #2Step end point; #4Step howtogetthere){
//    #3Step what to do 
//} 
//i = i + 1 same i++
//Create 1 for loop
for (var i = 0; i < favoritegames.length; i++) {
    if (favoritegames[i] === "witcher 3") {
        console.log(favoritegames[i])
    }
}


for (var i = 0; i < 5; i++) {
    console.log(i)
}


// functions with greetings

function greeting(boop) {
    alert(boop)
}
greeting("boop")

function add(A, B) {
    alert(A + B)
}
add(5, 3)

function sub(C, D) {
    alert(C - D)
}
sub(10, 4)
//////////////////
//level 0 curriculm last 5 videos cover this material "DOM”
//1. Create button with an ID on it in HTML
//2. Call Button into JS using document and getting element by its ID
//3. Set that button equal to a variable
//4. with that variable use dot notation to access the addeventlistener method
console.log(document.getElementById("button1"))
console.log(document)

const button = document.getElementById("button1")

function handleButtonClick() {
    document.getElementById("button1").innerHTML = "woah, you clicked me!"
    console.log("Button was pressed!")
}

button.addEventListener("click", handleButtonClick)

