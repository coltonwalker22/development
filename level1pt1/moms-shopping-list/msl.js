
// line 14 html for the form, this is to connect the name="addItem" = <form>
const form = document.addItem

// line 24 html of ul is name"list" which is now equal to myList 
const myList = document.getElementById('list')

//e = event of a function
form.addEventListener("submit", e => {
    e.preventDefault()

    //input is the name="input" which is actual tag inside of <form>
    const input = form.input.value
    form.input.value = ""
   
    //this creates a new listed item to add to our list. The "dot" of the listed item
    const newListItem = document.createElement("li")
    // newListItem.textContent = input
    myList.append(newListItem)

    //this creates a div that adds the text content we took from out input above.
    const itemName = document.createElement("div")
    itemName.textContent = input
    newListItem.prepend(itemName)

    //this creates an element for the edit button, and appends it after the newListItem
    const editButton = document.createElement("button")
    editButton.textContent = "edit"
    newListItem.append(editButton)
    
    //This creates an element for the delete(X) button and appends it after the newListItem
    const XButton = document.createElement("button")
    XButton.textContent = "X"
    XButton.style.marginLeft ="5px"
    newListItem.append(XButton)

    //this gives the delete button the acutal ability to remove the Li,div,edit 
    // and own delete button that is selected
    
    // delete button
    XButton.addEventListener("click", (e)=>{
        e.target.parentElement.remove()
    })


    // edit button
   
    editButton.addEventListener("click", (e)=>{
        let editInput = document.createElement("input")
        newListItem.append(editInput)
        editInput.value = itemName.textContent

        let editSubmitButton = document.createElement("button")
        newListItem.append(editSubmitButton)
        editSubmitButton.textContent ="Submit"

        editSubmitButton.addEventListener("click", (e)=>{
         itemName.textContent = editInput.value;
         editInput.remove();
         editSubmitButton.remove();
        })

        // when the user clicks on the edit button 
        // display an input field (editInpitField)
        // 
        // add a submit button
        // set value of input field = itemName.textContent
        // the user should be able to submit their input 
        // add an event listener to submit button 
        //    itemName.textContent = editInputField.value
        //    remove editInpitField and Edit submit button
    })
})














// for(let i = 0; i < form.addItem.length; i++){
//     XButton[i].onclick = function() {
//         let remove = this.parentElement;
//         remove.style.display = "none";

//     }
// }

//creates a close button

// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

//hides item when pressed

// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

