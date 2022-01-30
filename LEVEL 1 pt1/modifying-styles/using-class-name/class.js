
//className
// document.querySelector("header").className += " new-class"

document.querySelector("#header").classList.add("new-Class")
document.querySelector('#header').classList.remove('another')

document.querySelector('#header').classList.toggle('another')
console.log(document.querySelector("#header").className)







let header = document.getElementById('header')
header.style.backgroundColor = "blue"
document.body.style.backgroundColor = "red" //changes background of the whole webpage
header.style.textAlign = "center"
header.style.display = "inline"
header.style.padding = "20px"
header.style.position = "fixed"
header.style.left = "40%"
header.style.top = "10%"






/*
fontSize
backgroundColor
display
textAlign
margin, padding, border

you can "access" these using the styles property 
*/



// console.log(typeof header.style)
// console.log(object.keys(header.style))

