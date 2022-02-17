// const form = document.getElementById('my-form')


//below does not work because of syntax. the dash in
// 'my-form' is seen as a minus. do remedy, use []

// const form = document.my-form

const form = document["my-form"]

//submit event
//the preventDefault() method is used so when the submit button is pressed,
// it does not refresh the page. always use this when involing buttons
// to check to make sure its working, use the alert("its working") method.
form.addEventListener("submit", function(event){
    event.preventDefault()
   
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    form.firstName.value = ""
    form.lastName.value =""

    console.log(firstName + " " + lastName)


// to have elements appear after hitting the "submit" button.
//1. <h1></h1>
    const h1 = document.createElement('h1')

//2.<h1>colton walker</h1>

h1.textContent = firstName + " " + lastName

//3.append to DOM

document.getElementsByTagName("body")[0].append(h1)
})

