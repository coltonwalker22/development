var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// Loop through the following array and count how many "`computer`s" there are. Log the final count:

// let count = 0

// for(let i = 0; i < officeItems.length; i++){

//     if(officeItems[i] === "computer"){

//         //count = count+1
//         //count++
//         count+=1

//     }
// }

// console.log(count)

// Loop through the following array and log to the console "old enough" 
// if they are 18 or older, and "not old enough" if thy aren't 18.

var madMax = [
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
  for (let i = 0; i < madMax.length; i++){
     if(madMax[i].age < 18){
         console.log(madMax[i].name +" is not old enough to see Mad Max")
     }
     if(madMax[i].age >= 18){
         console.log(madMax[i].name +" is old enough to see Mad Max")
     }
  }
