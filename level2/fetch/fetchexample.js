function getData(){
    fetch("https://swapi.dev//api/people")
    .then(res => res.json())
    .then(res => console.log(res))
    .then((err) => console.log(err))
}

getData()