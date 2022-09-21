const readline = require("readline-sync")



class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name;
        this.totalCoins = 0;
        this.status = status;
        this.hasStar = hasStar;
    }

    setName(namePicked){
        if(namePicked === "Mario"){
            this.name = "Mario"
        } else if (namePicked === "Luigi"){
            this.name = "Luigi"
        }
    }

    gotHit(){
        let newStatus = Math.floor(Math.random() * 4)
        if(newStatus === 0){
           this.status = "Powered Up"
        } else if(newStatus === 1){
           this.status = "Big"
        } else if(newStatus === 2){
           this.status = "Small"
        } else if(newStatus === 3){
            this.status = "Dead"
        }

    }

    gotPowerup(){
        if (this.status === "Powered Up"){
            this.hasStar === "You have a star!"
        }
    }

    addCoin(){
        return this.totalCoins++;
    }

    print(){
        console.log(`Name: ${this.name} /n Total Coins: ${this.totalCoins} /n Status: ${this.status} /n ${this.hasStar}`)
    }

}

function startGame() {
    const player = new Player()
    let value = Math.floor(Math.random() * 3)
    if (value === 0){
        player.gotHit()
    } else if (value === 1){
        player.gotPowerup()
    } else if (value === 2){
        player.addCoin()
    }
    player.print()
}


startGame()