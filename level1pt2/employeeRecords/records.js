employees = []


function Employee(name, jobTitle, Salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = Salary
    this.status = status
    this.printEmployeeRecord = function(){
        this.status
    }
}

let charlie = new Employee("Charlie", "barbarian expert", 60000, "full time")
let will = new Employee("Will", "eldritch blast user", 50000, "full time" )
let kael = new Employee("Kael", "Dungeon Master", 80000, "full time") 
let nate = new Employee("Nate", "badass bass bard", 15000, "full time")

charlie.printEmployeeRecord()
will.printEmployeeRecord()
kael.printEmployeeRecord()
nate.printEmployeeRecord()


console.log(nate)