
// HTML CLASSES ASSIGNED TO VARIABLES TO JS

let button = document.querySelector(".button")
let goombaInput = document.querySelector(".goombaInput")
let cheepInput = document.querySelector(".cheepInput")
let bobInput = document.querySelector(".bobInput")
let resultInput = document.querySelector(".result")

// MATH FUNCTION BELOW FOR EACH TYPE OF "PEST"

function mul (x,y,z){
    return Number(x * 5) + Number(y * 11) + Number(z * 7)
}

// EVENT LISTENER FOR THE FUNCTION OF ABOVE WHEN BUTTON IS PRESSED

button.addEventListener("click", (e) => {
    e.preventDefault()
    let entry1 = parseFloat(goombaInput.value)
    let entry2 = parseFloat(cheepInput.value)
    let entry3 = parseFloat(bobInput.value)
    resultInput.textContent = mul(entry1, entry2, entry3)
})