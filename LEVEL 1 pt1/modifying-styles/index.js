var header = document.getElementById("header")



header.style.textAlign = "center"

header.style.margin = "0px"

header.style.display = "diplay: inline-block"

let paragraph = document.createElement('p') 
paragraph.textContent = "This is an amazing paragraph. wow."
paragraph.style.color = 'yellow'
header.append(paragraph)


let footnote = document.createElement('span')
footnote.textContent = "this is a footnote"
footnote.style.color = "purple"
paragraph.append(footnote)
