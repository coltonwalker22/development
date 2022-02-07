// GREETING/INTRO
const chalk= require("chalk");
readlineSync = require('readline-sync')

let username = readlineSync.question(chalk.green('Hello warrior! What is your name, hero?'))


let greeting = readlineSync.keyInPause(chalk.green(`${username}! There are enemies in the nearby forest.\n
You must defeat each one of these unsual enemies\n
and bring back there items that give them power!\n`))



// PLAYER VARIABLE

let player = {
    name: chalk.green(username),
    HP: 100,
    inventory:[]
}


// ENEMIES VARIABLE
let enemies = [
    {
        name: chalk.red("zombie"),
        HP: 100,
        action: "bites",
        item: "gold teeth"
    },
    {
        name: chalk.red("dark wizard in a bathrobe"),
        HP: 100,
        action: "shocks",
        item: "doritos"

    },
    {
        name: chalk.red("Krab with a tophat and monocle") ,
        HP: 100,
        action: "menacingly pinches",
        item: "monopoly money"
    }
]



// GAME LOGIC

let inGame = true
let inBattle = false
while(inGame){
    let input = readlineSync.keyIn(chalk.yellow(`press w to walk, \npress p to check inventory,\npress L to leave game.\n`))
    if (input === "w") {
        rollEncounter()
    } 
    else if (input === "p") {
        openInventory()
    }
    else if (input === "l") {
        console.log(chalk.red(`game over!`)); break; 
     }
     
}
// break and continue are possible keywords to leave a loop


// ENCOUNTERING ENEMIES

// ! means it is  "not"  so: if( not encoutnering enemy, then "youve encoutnered nothing.")
// alternativley you could do if(encounterEnemy === false)..."you encountered nothing."
// if(encoutnerEnemy === true){...'youve encountered enemy!}



function rollEncounter(){
    let encounterEnemy = Math.floor(Math.random()*3) === 1
    if(!encounterEnemy) {
        readlineSync.keyInPause(chalk.blue("You've encountered nothing here. Keep moving forward!"))   
    }
    if(encounterEnemy) {
        let enemy = enemies[Math.floor(Math.random()*3)]
        readlineSync.keyInPause(`You've encountered ${enemy.name}!`)
        fightEnemy(enemy)
       
        
    }
}

// DAMAGE AND HEALTH FUNCTIONS
// line 92+93 hhave +1 so the enemy doesnt output to 0.
// line 95 is the same as example: player.HP = player.HP - enemyAttack


function calculateDamage(enemy){
    let playerAttack = Math.floor(Math.random()*20)+1 
    let enemyAttack = Math.floor(Math.random()*10)+1
   player.HP -= enemyAttack
   enemy.HP -= playerAttack
   console.log(`You take a swing at ${enemy.name} dealing ${playerAttack} damage!`)
   console.log(`${enemy.name} ${enemy.action} you for ${enemyAttack} damage!`)
}

function checkHP(enemy){
    if ( player.HP <= 0){
        inBattle = false
        console.log(`${player.name} is limp on the ground\n GAME OVER`)
        inGame = false
        return "battle end"
    }
    if (enemy.HP <= 0){
        inBattle = false
        console.log(`${enemy.name} is no longer with us.`)
        player.inventory.push(enemy.item)
        console.log(`${player.name} has found ${enemy.item} and has added it to their inventory.`)
        let recoveredHP = player.HP+15
        player.HP += recoveredHP
        console.log(`${player.name} recovered ${recoveredHP} HP`)
        enemy.HP = 100
        return "battle end"
    }
}


// FIGHTING/RUNNING FUNCTION

function fightEnemy(enemy){
inBattle = true    
    
    while(inBattle){
    let battleStatus = checkHP(enemy)
    if(battleStatus === "battle end") break
    console.log(`${player.name}: ${player.HP} / 100 HP`)
    console.log(`${enemy.name}: ${enemy.HP} / 100 HP\n`)
    let fightInput = readlineSync.keyIn(`press F to fight or R to run away!\n`)
    if(fightInput === "f"){
        calculateDamage(enemy)

    }
    if(fightInput === "r"){
        let runAway = Math.floor(Math.random()*2)
        if (runAway){
            console.log(`${player.name} has succesfully ran away`)
            inBattle = false
            break
        } else{
            console.log(`${player.name} has failed to run away`)
            let fleeAttack = Math.floor(Math.random()*10)+1
            player.HP -= fleeAttack
            console.log(`${enemy.name} attacked you while fleeing for ${fleeAttack}`)
        }
        
    }
}
}
// INVENTORY 

function openInventory(){
    console.log(`${player.name}: ${player.HP} / 100HP inventory:`)
    for(let i = 0; i < player.inventory.length; i++){
        console.log(player.inventory[i])
    }
    console.log(`\n`)
}

