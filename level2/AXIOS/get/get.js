// Get requests with axios
// url: https://api.vschool.io/coltonwalker/todo

// Get All

axios.get("https://api.vschool.io/coltonwalker/todo/")
    .then(response => {
        for(let i = 0; i < response.data.length; i++) {
            const h1 = document.createElement("h1");
            h1.textContent = response.data[i].title;
            document.body.appendChild(h1)
        }
    })
    .catch(error => console.error(error))

// Get One

// axios.get("https://api.vschool.io/coltonwalker/todo/62194dc2145e7804c26a23f6")
//     .then(response => console.log(response))
//     .catch(error => console.error(error))