// targeting container tp fill to-do list area
const toDoContainer = document.getElementById("todo-list")

// empty containers for our data to be housed from the DATABASE
let toDos = []
let toDoList = ""


// actively retrieving data from the database (requesting data from URL)
//
axios.get("https://api.vschool.io/coltonwalker/todo")
.then(({ data }) => { 
    toDos = data 
    loadTodos()
})


function loadTodos(){
    for(let i = 0; i < toDos.length; i++){
        toDoList +=
        `<div id="${toDos[i]._id}" class="todo" style="text-decoration: ${toDos[i].completed ? 'line-through' : 'none'} ">
        <input type="checkbox" onchange="checkToDo(this)" data-id="${toDos[i]._id}" ${toDos[i].completed ? "checked" : ""}/>
        
        ${toDos[i].title}
        <button data-id="${toDos[i]._id}" class="deleteButton">delete</button>
        </div>`
    }
    toDoContainer.innerHTML = toDoList
    
    
    // document.getElementsByClassName('deleteButton').addEventListener("click", (e) =>{
    //     e.preventDefault();
    //     console.log("fired")
    // })

    function clearData() {
        const el = document.getElementById("to-do-list")
        while(el.firstChild){
            el.removechild(el.firstChild)
        }
        }




    document.addEventListener("click", (e) =>{
        clearData()
        if(e.target.matches(".deleteButton")){
            e.preventDefault()
            const id = e.target.getAttribute("data-id")
            axios.delete(`https://api.vschool.io/coltonwalker/todo/${id}`)
            .then(()=>{
                document.getElementById(id).remove()
                let b = JSON.stringify(e.target.parentElement.outerHTML, null, "\\")
                toDoList = toDoList.replace(b, "")
                
            })
        }
    })
}


//checkboxes
// a.checked evaluates to true or false
function checkToDo(checkbox){
    const id = checkbox.getAttribute("data-id")
    axios.put(`https://api.vschool.io/coltonwalker/todo/${id}`,{ completed: checkbox.checked }) 
        .then(() =>{
            document.getElementById(id).style.textDecoration = checkbox.checked ? "line-through" : "none"  //ternary setting the value of text decoration
        })
        .catch((err) =>{console.error(err)})
 
}

function checkInput(input){
    document.getElementById("inputButton").disabled = input.value === ""
    

}


document.getElementById('inputButton').addEventListener("click",(e)=>{
    e.preventDefault();
    axios.post('https://api.vschool.io/coltonwalker/todo', {
        completed: false,
        title: document.getElementById("inputItem").value
    })
        .then(({ data }) =>{
            document.getElementById('inputItem').value = ""
            toDoList +=
            `<div id="${data._id}" class="todo" style="text-decoration: ${data.completed ? 'line-through' : 'none'} ">
            <input type="checkbox" onchange="checkToDo(this)" data-id="${data._id}" ${data.completed ? "checked" : ""}/>
            
            ${data.title}
            <button data-id="${data._id}" class="deleteButton">delete</button>
            </div>`
         
            toDoContainer.innerHTML = toDoList

        })
});

