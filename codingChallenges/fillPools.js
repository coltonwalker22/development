const walls = [
    "########################",
    "#      #               #",
    "#      #               #",
    "#      #               #",
    "#      #               #",
    "########### ############",
    "#             #        #",
    "#             #        #",
    "#             #        #",
    "#             #        #",
    "#             #        #",
    "#             #        #",
    "#             #        #",
    "#             #        #",
    "################### ####",
    "#                      #",
    "#                      #",
    "########################"
]

console.log(checkAndFill([...walls], 2, 4))
console.log(checkAndFill([...walls], 10, 4))

function checkAndFill(walls, y, x){
    const rowArr = walls[y].split("")
    rowArr[x] = "+"
    walls[y] = rowArr.join("")
    // check left -1, 0
    checkAndFill(walls, y - 1, x)
    checkAndFill(walls, y + 1, x)
    checkAndFill(walls, y, x - 1)
    checkAndFill(walls, y, x + 1)
    // check right +1, 0
    // check up 0, -10
    // check down 0 +1
    return walls
}