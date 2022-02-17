// .filter()

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = arr.filter(function(num){
//     if(num % 2 === 0){
//         return num + 10
//     }
// })

// const result = arr.filter( num => num % 2 === 0 ) 
//in () "for each number, if it evaluates to a truthy statment, then return that number"


// console.log(result)


const movies = [
    { name: "movie1", genre: "horror" },
    { name: "movie2", genre: "action" },
    { name: "movie3", genre: "action" },
    { name: "movie4", genre: "fantasy" }
]

// const result = movies.filter(function(movie){
//     if(movie.genre === "action"){
//         return movie // or "true"
//     }

// })

const result = movies.filter( movie => movie.genre === "action")

console.log(result)
