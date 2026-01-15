function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255, 0, 0);
  beginShape();
  vertex(28, 100);
  quadraticVertex(243, 372, 156, 139);
  bezierVertex(302, 383, 137, 175, 213, 340);
endShape(CLOSE)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function myTriangle(amountOfWindow, x, y){
  push()
  const size = width * amountOfWindow;
  //triangleMode(CENTER);
  translate(x,y);
  triangle(0, 0, size, size*2 -size, size*2);
  pop();
}



