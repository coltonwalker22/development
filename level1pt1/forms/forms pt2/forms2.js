const form = document.myForm

form.addEventListener("submit", (event)=> {
    event.preventDefault()

    //radio inputs
    // console.log(form.gender.value)


    // form.entertainment.value, below is not a singular input, so will return an array
    // console.log(form.entertainment.value)

    //checked inputs
    // console.log(form.entertainment)

    // const checkedInputs = []

    for(let i = 0; i < form.entertainment.length; i++){
        if(form.entertainment[i].checked){
            checkedInputs.push(form.entertainment[i].value)
        }
    }

    // console.log(checkedInputs)

    console.log(form.city.value)


})
