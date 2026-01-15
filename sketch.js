function setup() {
  createCanvas(400,400);
}

function draw() {
  background(255, 0, 0);
  beginShape();
  vertex(28, 100);
  quadraticVertex(243, 372, mouseX, mouseY);
  console.log("mouseX: "+mouseX, "mouseY: "+mouseY);
  bezierVertex(302, 383, 137, 175, 213, 340);
endShape(CLOSE)
}

// //function windowResized(){
//   //resizeCanvas(windowWidth, windowHeight);
// }

// function myTriangle(amountOfWindow, x, y){
//   push()
//   const size = width * amountOfWindow;
//   //triangleMode(CENTER);
//   translate(x,y);
//   triangle(0, 0, size, size*2 -size, size*2);
//   pop();
// }



