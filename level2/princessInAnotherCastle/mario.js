// // ...
// // ...

// let namePicked = readline.question("...")
// player.setName(namePicked))

class Player {
    constructor(name, status, totalCoins, hasStar){
        this.name = name
        this.totalCoins = 0
        this.status = "big"
        this.hasStar = false

    }

    setName(namePicked){
        this.name = namePicked

    }

    //this function runs when the player is 'hit'
    // this only lowers the player status with if statements.
    // when the status is 'small' the player is dead and clears the interval (ends game)
    gotHit(){
        if(this.status === "small"){
            this.status = "dead"
            console.log(`${this.name}has been hit!`)
            console.log(`${this.name} has died`)
            clearInterval(gameRun)
        }
        else if(this.status === "big"){
            this.status = "small";
            console.log(`${this.name} has been hit!`)    
        }
        else if(this.status === "powered up"){
            this.status = "big";
            console.log(`${this.name} has been hit!`)
        }
        else if(this.status === "powered up" && this.hasStar){
            this.status = "powered up";
            this.hasStar = false;
            console.log(`Your star has protected you!`)
        }
    }
   // if statement for powerup. this changes the current status.
   //the status changes goes upward only. 
    gotPowerup(){
       if(this.status === "small"){
           this.status ="big";
           console.log(`You got powered up!`)
       }
       else if(this.status === "big"){
           this.status = "powered up";
           console.log(`You got powered up!`)
       }
       else if(this.status === "powered up"){
           this.hasStar = true;
           console.log(`You have a star!`)
       }
    }
    //when this function runs, it adds one coin to 'total coins'
    addCoin(){
     this.totalCoins++     
    console.log(`${this.name} added a coin!`)
    }
    // below prints off the players current information
    print(){
    console.log(`player:${this.name}
coins:${this.totalCoins}
status:${this.status}
has star:${this.hasStar}\n`)
    }
}

// below sets the player and its info, and "hard-codes" the the setName. You can either pass it as a paramter like "new Player ('Mario')" or "player.setName('Mario')""
const player = new Player();
player.setName("Mario") // discovered you can pass the name through new Player that sets the name paramter to the class constructor


// this interval gives an outcome between 0 and 2.
//between the three options it runs the functions,
// gotHit, gotPowerup, and addCoin. every 3 seconds (3000),
// only of these things will happen
const gameRun = setInterval(() => {
    player.print()
    let outcome = Math.floor(Math.random()*3)
    if(outcome === 0){
        player.gotHit();
    }
    else if(outcome === 1){
        player.gotPowerup();
    }
    else if(outcome === 2){
        player.addCoin();
    }
}, 3000)
 
