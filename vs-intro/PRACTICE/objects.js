// var person = {
//     name: "Colton",
//     age: 29,
//     disability: "clinical depression",
//     friends: ["Will","Levi","Liz","Charlie","Christian"],
//     address: {
//         street: "2561 new holland cir",
//         city: "murfreesboro"
//     }
// } 
//console.log(person.name)
//console.log(person.age)
//console.log(person.disability)
//console.log(person.friends)
//console.log(person.address.street)

//console.log(person["address"]["city"])

var car ={
    type: "nissan",
    make: "versa",
    wheels: 4,
    honkSound: "BLERP",
    honk: function (){
        console.log(this.honkSound)
    }
}
//car.hasHadAccident = true
//console.log(car)

car.honk()

var otherCar = car

otherCar.type = "Jeep"
console.log(car)