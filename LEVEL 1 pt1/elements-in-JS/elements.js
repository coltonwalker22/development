let newLi = document.createElement("li")
newLi.textContent = "3"

let myList = document.getElementById("my-list")

myList.append(newLi)
myList.style.textAlign ="center"

let paragraph = document.createElement("p")

paragraph.textContent = "This is a paragraph"

document.body.append(paragraph)
paragraph.style.textAlign = "center"
paragraph.style.fontSize = "50px"
paragraph.style.color = "green"


// myList.append(paragraph)

