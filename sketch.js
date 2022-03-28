function setup(){
  createCanvas(windowWidth,windowHeight)
}
function draw() {
  
}

function touchStarted(){
  text(touches[0].getTouchInfo(),windowWidth/2,windowHeight/2);
}