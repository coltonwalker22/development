// Web Storage

// Local Storage
// Session Storage

// JSON - Javascript Object Notation
    // JSON.stringify => turning JS into JSON
    // JSON.parse => turns JSON into JS
// Setter - Save data in local storage (key = value pairs)

// localStorage.setItem("name", "steve")
// localStorage.setItem("age", 10)
// localStorage.setItem("isAlive", true)
// localStorage.setItem("friends", JSON.stringify(["mark", "tim", "jay"]))
// localStorage.setItem("adress", JSON.stringify({street: "123 street", city: "SLC"}))

// Getter 
// const name = localStorage.getItem("name")
// const age = localStorage.getItem("age")
// const isALive = localStorage.getItem("isAlive")


// Remove
localStorage.removeItem("age")

localStorage.removeItem("name", "steve")
localStorage.removeItem("age", 10)
localStorage.removeItem("isAlive", true)
localStorage.removeItem("friends", JSON.stringify(["mark", "tim", "jay"]))
localStorage.removeItem("adress", JSON.stringify({street: "123 street", city: "SLC"}))


// localStorage.dinosaur = "T-rex"
// console.log(localStorage.dinosaur)
localStorage.removeItem("dinosaur")

// set item is to SAVE TO LOCAL STORAGE
// get item is to GET THE LOCAL SAVED ITEM