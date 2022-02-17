// variable for timer
let timer = 30

// VARIABLES FOR BUTTON AND RESULT FIELD
let button = document.getElementById("button")
let resultInput = document.getElementById("result") 
let countdownTimer = document.getElementById("timer")

// let newPlayer ={
    //     score: 0,
    //     scorePerClick: 1
    // }
    // let player = JSON.parse(localStorage.getItem("player")) || newPlayer
    // resultInput.textContent = player.score
    // countdownTimer.textContent = timer 
    
    
    // VARIABLE FOR STARTING COUNT

let count = parseInt(localStorage.getItem("count")) || 0
// let count = JSON.parse(localStorage.getItem("count")) || 0

resultInput.textContent = count


//BUTTON AEL: adds a count of +1 for every click.
// shows amount in resultfield.

let countdown = setInterval(()=>{
   if(timer === 0){
       clearInterval(countdown)
   alert(`your score was ${player.score}`)
   }
 timer -=1
 countdownTimer.textContent = timer 
}, 1000)

button.addEventListener("click", (e)=>{
    e.preventDefault()
    count += 1;
    localStorage.setItem("count", count)
    resultInput.textContent = count
    
    
    // player.score += player.scorePerClick
    // localStorage.setItem("player", JSON.stringify(player))
    // resultInput.textContent = player.score
})
