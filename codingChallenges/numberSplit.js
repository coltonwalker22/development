// numberSplit(4) ➞ [2, 2]

// numberSplit(10) ➞ [5, 5]

// numberSplit(11) ➞ [5, 6]

// numberSplit(-9) ➞ [-5, -4]

function numberSplit(num){

    let divide = Math.floor(num / 2);
    let answer = num - divide;
    let array = [];
    array.push(divide, answer)
    return array
    
}

console.log(numberSplit(2))