// Constructor Functions

// They build objects 
// "new" - instantiates the object

function  Car(make, model, year,honkSound){
    this.make = make
    this.model = model
    this.year = year
    this.honkSound = honkSound
    this.honk = function(){
        // console.log("HOOOOONK")
        console.log(this.honkSound)
    }
}

let jeep = new Car("Jeep", "Cherokee", 1995, "HOOOONK")
let mazda = new Car("Mazda", "3 hatchback", 2015,"BLAAAARP")

// console.log(jeep) // => outputs entire object  Car { make: 'Jeep', model: 'Cherokee', year: 1995 }


Car.prototype.honk = function(){
    console.log(this.honkSound)
}

jeep.honk() // both output the function honk in the constructor function, reading the console.log strin "HOOONK"
mazda.honk()


