
// VARIABLES FOR HTML FORMS

const addNum = document.addForm
const subNum = document.subForm
const mulNum = document.mulForm

document.body.style.backgroundColor = "grey"


// PAGE ELEMENTS 

let header = document.getElementById("header")
header.style.fontSize = "100px"
header.style.textAlign= "center"
header.style.border = "7px solid black"
header.style.backgroundColor = "grey"

let firstInput = document.getElementById("addDiv")
firstInput.style.padding = "15px"
firstInput.style.text

let secondInput = document.getElementById("subDiv")
secondInput.style.padding = "15px"

let thirdInput = document.getElementById("mulDiv")
thirdInput.style.padding = "15px"


// MATH FUNCTIONS

function add (x,y){
    return x + y;
}

function sub (x,y){
    return x - y;
}

function mul (x,y){
    return x * y;
}


// EVENT LISTENERS FOR EACH BUTTON AND MATH FUNCTION

addNum.addEventListener("submit", (event) => {
    event.preventDefault()

    let firstNumAdd = parseFloat(addNum.firstNum.value)
    let secondNumAdd = parseFloat(addNum.secondNum.value)

    console.log(add(firstNumAdd,secondNumAdd))


    let h1 = document.createElement('h1')
    h1.textContent = `${firstNumAdd}+${secondNumAdd}=${add(firstNumAdd,secondNumAdd)}`
    h1.style.color = "green"
    document.getElementsByTagName("body")[0].append(h1)

})

subNum.addEventListener("submit", (event) => {
    event.preventDefault()

    let firstNumSub = parseFloat(subNum.firstNum.value)
    let secondNumSub = parseFloat(subNum.secondNum.value)

    let h1 = document.createElement('h1')
    h1.style.color = "blue"
    h1.textContent = `${firstNumSub}-${secondNumSub}=${sub(firstNumSub,secondNumSub)}`
    document.getElementsByTagName("body")[0].append(h1)

})

mulNum.addEventListener("submit", (event) => {
    event.preventDefault()

    let firstNumMul = parseFloat(mulNum.firstNum.value)
    let secondNumMul = parseFloat(mulNum.secondNum.value)

    let h1 = document.createElement('h1')
    h1.style.color = "purple"
    h1.textContent = `${firstNumMul}*${secondNumMul}=${mul(firstNumMul,secondNumMul)}`
    document.getElementsByTagName("body")[0].append(h1)

})