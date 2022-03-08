// Post request
// Request Body

// const newTodo = { 
//      title:"My 3rd Todo",
//      description: "this is my 3rd entry",
//      imgUrl: "https://images.unsplash.com/photo-1546921888-e443f8c96a31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
// }


addEventListener
const todoForm = document.todoForm

todoForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    axios.post("https://api.vschool.io/coltonwalker/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    
})

// todoForm.addEventListener("sumit", function(event){
//     event.preventDefault()
    
//     const newTodo = { 
//         title: todoForm.title.value,
//         description: todoForm.description.value,
//         imgUrl: todoForm.imgUrl.value,
//     }

//     axios.post("https://api.vschool.io/coltonwalker/todo/", newTodo)
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))
    
// })







// GET all todos
// axios.get("https://api.vschool.io/scrimbalessons/todo")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))