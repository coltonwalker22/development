// let form = document.getElementById("main-form")
const form = document["main-form"]


function submitForm(){
 let firstName = document.querySelector('[name="first-name"]').value
 let lastName = document.querySelector('[name="last-name"]').value
let age = document.querySelector('[name="age"]').value
let genderArr = [];
 if(document.querySelector('[name="male"]').checked){
     genderArr.push(document.querySelector('[name="male"]').value)
 }
 if (document.querySelector('[name="female"]').checked){
    genderArr.push(document.querySelector('[name="female"]').value)
}
 let location = document.querySelector('[name="location"]').value
let dietArr = [];
if(document.querySelector('[name="kosher"]').checked){
    dietArr.push(document.querySelector('[name="kosher"]').value)
}
if (document.querySelector('[name="vegitarian"]').checked){
   dietArr.push(document.querySelector('[name="vegitarian"]').value)
}
if (document.querySelector('[name="vegan"]').checked){
    dietArr.push(document.querySelector('[name="vegan"]').value)
 }
 
 
 alert("First name: " + firstName + "\nLast Name: " + lastName +
 "\nAge: " + age + "\nGender: " + genderArr + "\nDesired Location: " + location
 + "\nDietary Restrictions: " + dietArr )
}




form.addEventListener("submit", (e) =>{
e.preventDefault()
submitForm()})
