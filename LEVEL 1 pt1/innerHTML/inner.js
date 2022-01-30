let myList = document.getElementsByName("my-list")

myList.innerHTML += "<li>3</li>"

document.body.innerHTML += "<p id='paragraph'>correct way ya dingus</p>"
document.getElementById("paragraph").style.textAlign = "center"


// not like this I guess

// let paragraph = document.createElement("p")

// paragraph.innerHTML += "<p>what up dude<p>"


// let things = document.createElement('thing')


// for (let i = 0; i < things; i++){
//     things[i].style.textContent = "hooray";
// }

// console.log(things)
// console.log(things[i])


//USING FOR LOOPS IN JS TO CREATE AN ELEMENT

// let videoGames = [
//     "witcher 3",
//     "knack 2",
//     "KOTOR",
//     "god of war",
//     "battlefield",
//     "half-life",
// ]


let videoGames = [
    {name: "withcer 3", year: "2014"},
    {name: "knack 2", year: "2016"},
    {name: "KNOTR", year: "2006"},
    {name: "god of war", year:"2005"}
]

let gameList = document.getElementById("games")

for (let i = 0; i < videoGames.length; i++){
    let newGame = document.createElement("li")
     newGame.textContent = videoGames[i]
     gameList.append(newGame)
}


// for innerHTML

// for (let i = 0; i < videoGames.length; i++){
//     gameList.innerHTML += "<li>" + videoGames[i] + "</li>"
// }