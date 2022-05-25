let step = 1
let x,y;
let stepSize = 100;
let numSteps = 1;
let state = 0;

function setup(){
    creatCanvas(500,500);
    x = width / 2; 
    y = height / 2;

}

function draw () {
    textSize(640,480);
    textAlign(CENTER,CENTER);
    fill(255,255);
    text(num,x,y)
}

switch (state){
    case 0:
        x += stepSize;
        break;
    case 1:
        y -= stepSize;
    case 2:
    x -= stepSize;
    break;
    case 3:
        y + stepSize;
    break;
     

}

step++;
if (step % 2 == 0){
    state = state + 1;
}
frameRate(1);
