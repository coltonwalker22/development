// Constructor Functions
// blueprint for generate js objects with the same shape


//constructor is "what it is to be car"
// function Car(make, model){
//     this.make = make;
//     this.model = model
  
// }


// what do cars "Do"
// Car.prototype.honk = function(){
//     console.log("Honk")
// }


//instantiate

// const jeep = new Car("jeep", "cherokee")
// const mazda = new Car("mazda", "3")

// mazda.honk()



// ES6 classes 
// in the curly brackets below, it is the same as the constructor above and the prototype.(lines 6-10 & 13-16)

class Vehicle {
    constructor(make, model, honkSound){
        this.make = make
        this.model = model
        this.honkSound = honkSound
    }

    honk(){
        console.log(this.honkSound)
    }

    drive(){
        console.log("Vrooom")
    }

}
// extends Vehicle is what inherets the properties above (such as the honk and drive)
//dont repeat yourself. DRY
class Motorcycle extends Vehicle{
    constructor(make, model, honkSound, hasSideCar){
        super(make, model, honkSound)
        this.hasSideCar = hasSideCar 
    }
}

const jeep = new Vehicle("jeep", "cherokee", "veeerp")
jeep.honk()

const harley = new Motorcycle("Harley", "davidson", "honkey", true)

harley.honk()