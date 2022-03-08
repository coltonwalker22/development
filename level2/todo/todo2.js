
const todoList = document.getElementById('todo-list')



// GET request for todo list
const getTodo = () =>{
 axios.get("https://api.vschool.io/coltonwalker/todo/")
    .then(res => createTodos(res.data)) // res is what is passed to use for the for loop
    .catch(error => console.error(error + " this is a 'get' error"))
    
}

// function below passes the response data (res) from the API get above.
// a for loop is used to clear the list and present an updated list for the todo on the webpage.
const createTodos = (res) => {
    clearTodo() //clears DOM elements
    for(let i = 0; i < res.length; i++) {
    makeOne(res[i])
    }
}
    
function makeOne(todo){
    let ID = todo._id
    //newList item creates a div that  represents each item "to do"
    // the text content is displaying the data(res) from each title as a text content.
    const newListItem = document.createElement("div");
        newListItem.textContent = todo.title;
        newListItem.className = "newListItem";
        todoList.append(newListItem);
    

    //checkbox
    const checkbox = document.createElement("input");
    // checkbox.checked = todo.checked;
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    newListItem.prepend(checkbox);

    checkbox.checked = todo.completed;
    
    checkbox.addEventListener("change", () =>{
        let ID = todo._id
        if(checkbox.checked){
            newListItem.style.textDecoration = "line-through";
            let completed = {completed: true}
            axios.put(`https://api.vschool.io/coltonwalker/todo/${ID}`, completed)
            .then(res => console.log(res.data))
            .catch(error => console.log(error + " this is a checkbox checked error"))
        } else {
            newListItem.style.textDecoration = "none"
            let incomplete = {completed: false}
            axios.put(`https://api.vschool.io/coltonwalker/todo/${ID}`, incomplete)
            .then(res => console.log(res.data))
            .catch(error => console.log(error + " this is a checkbox uncheck error"))
            
        }
    })
 

        //a delete button next to listed item, when button is "clicked"
        // this removes the item from newListItem, the APIs id is targeted with the variable
        // so that it is specified on line 33 ${ID}, so that axios can delete that specfic object.
    const deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";
        deleteButton.className = "deleteButton";
        newListItem.append(deleteButton)
            deleteButton.addEventListener("click", () =>{
                newListItem.remove()
                let ID = todo._id
                axios.delete(`https://api.vschool.io/coltonwalker/todo/${ID}`)
                    .then(res => console.log(res))
                    .catch(error => console.log(error + " this is a delete error"))

        })

        // an edit button where "clicked", it removes the current elements,
        // so that it shows a new input that can be used.
    const editButton = document.createElement("button");
        editButton.className = "editButton";
        editButton.textContent = "edit"
        newListItem.append(editButton)
        editButton.addEventListener("click", () =>{
            newListItem.remove();
            
            

            let newInput = document.createElement("input")
            let saveButton = document.createElement("button")
                saveButton.textContent = "Save"
                saveButton.className = "saveButton"
                newInput.className = "newInput"
                newInput.value = newListItem.textContent


         
            document.getElementById("todo-list").appendChild(newInput);
            document.getElementById("todo-list").appendChild(saveButton);

            saveButton.addEventListener("click", () =>{
                newListItem.textContent = newInput.value  
                newInput.remove()
                saveButton.remove()
                document.getElementById("todo-list").appendChild(newListItem)
                newListItem.appendChild(checkbox)
                newListItem.appendChild(deleteButton)
                newListItem.appendChild(editButton)
          
                 let newUpdatedItem = {
                     title: newInput.value
                }
                // let ID = todo._id
                axios.put(`https://api.vschool.io/coltonwalker/todo/${ID}`, newUpdatedItem)
                     .then(res => console.log(res.data))
                     .catch(error => console.log(error + "this is an update error"))

            })


        })
} 
    
    



    // function that handles clearing out item list to be later updated.
    const clearTodo = () => {
        const el = document.getElementById("todo-list");
        while(el.firstChild){
            el.removeChild(el.firstChild)
        }
    }

// this function runs automatically in order to get current data from the API
getTodo() 


//"add to list" button. submits the object to API
const myForm = document.myForm

myForm.addEventListener("submit", (e) => {
    e.preventDefault()
   
    const newTodo = {
        title: myForm.inputItem.value
    }
    axios.post("https://api.vschool.io/coltonwalker/todo", newTodo)
        .then(res => makeOne(res.data))
        .catch(err => console.log(err))


    myForm.inputItem.value = ""
    
})

