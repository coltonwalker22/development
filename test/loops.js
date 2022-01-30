// const newStuff = function newStuff(something){
   
   
//     let count = 0

//     for(let i = 0; i < something.length; i++){
        
//         if(something[i] === "o"){
            
//             count++
//         }
        
//     }
    
//     return count
// }

// console.log(newStuff("oranges are great sometimes and only at lunch"))
// console.log(newStuff("hello world"))
// console.log(newStuff("colton is awesome"))



var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

let count = 0

for(let i = 0; i < officeItems.length; i++){

    if(officeItems[i] === "computer"){

        //count = count+1
        //count++
        count+=1

    }
}

// console.log(officeItems.filter(oi => oi === "computer").length)

console.log(count)


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

//   console.log(peopleWhoWantToSeeMadMaxFuryRoad.filter(fingledorf => fingledorf.gender === "female"))

//   console.log(peopleWhoWantToSeeMadMaxFuryRoad.filter(({gender}) => gender === "female"))  //destruct key=name of value 
// console.log(
//     peopleWhoWantToSeeMadMaxFuryRoad
//     .map(fingledorf => fingledorf.age)
//     .sort((a,b) => a - b)

// )

//   console.log(peopleWhoWantToSeeMadMaxFuryRoad.map(fingledorf => ({age: fingledorf.age, gender: fingledorf.gender})))

//   console.log(peopleWhoWantToSeeMadMaxFuryRoad.find(fingledorf => fingledorf.age === 30))