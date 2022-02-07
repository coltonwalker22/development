const chalk= require("chalk")
readlineSync = require('readline-sync')

let username = readlineSync.question(chalk.green(`HELLOOOOO WARRIOR! WHAT IS YOUR NAME?`))

let greeting = readlineSync.question(`${username}! get the fuck outta here done get out run
bro get on get get out of here.`)

//PLAYER VARIABLE

let player = {
    name: username,
    HP: 100,
    inventory: []
}


//ENEMIRES VARIABLE
let enemies = [
    {
        name: 'zombie',
        HP: 100,
        item: 'severed arm'
    },
    {
        name: ' dark wizard',
        HP: 100,
        item: 'the darnkess'
    },
    {
        name: 'krab',
        HP: 100,
        item: 'pinchers'
    }
]

// GAME LOGIC

let inGame = true
let inBattle = false
while(inGame){
    let input = readlineSync.KeyIn(`press w to walk, \n press p to check inventory, \n press L to leave game \n`)
    if (input === "w"){
        rollEncounter()
    }
    if (input === "p"){
        openinventory()
    }
    if (input === "l"){
        console.log("game over!")
    }
}

function rollEncounter(){
    let encounterEnemy = Math.floor(Math.random()*3) === 1
    if( encounterEnemy === false){
        readlineSync.keyinPause("youve encountered nothing. keep moving forward!")
    }
    if(encounterEnemy) {
        let enemy = enemies[Math.floor(Math.random()*3)]
        readlineSync.keyinPause(`You've encountered ${enemy.name}!`)
        fightEnemy(enemy)
    }
}

// DAMAGE AND HEALTH FUNCTIONS

function calculateDamage(enemy){
    let playerAttack = Math.floor(Math.random()*20)+1
    let enemyAttack = Math.floor(Math.random()*10)+1
    player.HP = player.HP - enemyAttack
    enemy.HP = enemy.HP - playerAttack
    console.log(`You take as swing at ${enemy.name} dealing ${playerAttack} damage!`)
}