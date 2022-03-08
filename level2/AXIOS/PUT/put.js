// PUT request with axios

const updates = { 
    description: "I changed the description"
}

axios.put("https://api.vschool.io/coltonwalker/todo/621a8ce5145e7804c26a2412", updates)
    .then(respone => console.log(respone.data))
    .catch(error => console.log(error))


const person = {
    name: "steve",
    age: 20
}

const updates = { 
    name: "dan"
}

 const result = Object.assign(person, updates)
 console.log(result)


// GET 
// axios.get("https://api.vschool.io/coltonwalker/todo")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))