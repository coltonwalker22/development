let result = document.querySelectorAll("ol#games > li")

console.log(Array.from(result))

for (var i = 0; i< result.length; i++){
    result[i].textContent = "boop"
}
