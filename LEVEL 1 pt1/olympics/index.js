let header = document.querySelector('#header')
header.textContent = "JavaScript Made This!!"
header.style.fontSize ="50px"
header.style.length = "100px"
header.style.backgroundColor="aqua"

let myName = document.createElement("p")
myName.setAttribute("class", "name")
myName.textContent = "Colton Walker "

header.append(myName)

let span = document.createElement('span')
span.textContent = " 800-whatup-dude"
span.style.color ="black"
myName.append(span)

let button = document.getElementById('clear-button')

let text = document.querySelector('.messages')


button.addEventListener('click', ()=>
    text.remove()
)

let main = document.getElementById('main')

let nice = document.createElement('button')
nice.textContent ="make nice"

main.prepend(nice)


let message1 = document.querySelector('.messages')
let message2 = document.querySelector('.right')
let message3 = document.querySelector('.left')

nice.addEventListener('click',()=>{
    let newMessage = document.createElement('div')
    newMessage.textContent ="want to get icecream?"
    newMessage.setAttribute('class', 'left')
    newMessage.style.padding="5px"
    text.prepend(newMessage)

    message1.style.display= "none"

    let newMessage1 = document.createElement('div')
    newMessage1.textContent ="I want two scoops!"
    newMessage1.setAttribute('class', 'right')
    newMessage1.style.padding="5px"
    text.append(newMessage1)
})

console.log(message1)









// let input = document.createElement('input')
// input.placeholder = "enter here"
// myName.append(input)

// let button = document.createElement('button')
// button.textContent = "submit"

// myName.append(button)

// header.addEventListener("submit",(e)=>{
//     e.preventDefault
//     console.log("button pressed")
// })