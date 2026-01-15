function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255, 0, 0);
  line(0, height/2, width, 0)
  ellipse(width/2, height/2, 100, 100)
  myTriangle(.05, width/3.56, height/4.26);
  console.log("mouseX: "+mouseX, "mouseY: "+mouseY);
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



