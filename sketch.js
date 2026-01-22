function setup() {
  createCanvas(400,400);
}

function draw() {
  background(255, 0, 0);
//   beginShape();
//   vertex(28, 100);
//   quadraticVertex(243, 372, mouseX, mouseY);
//   console.log("mouseX: "+mouseX, "mouseY: "+mouseY);
//   bezierVertex(302, 383, 137, 175, 213, 340);
// endShape(CLOSE)
// }




beginShape();
  vertex(15, 17);
  bezierVertex(400, 350, 120, 100, 175, 300);
endShape(CLOSE)

beginShape();
  vertex(15, 17);
  quadraticVertex(238, 317, 153, 108);
  //bezierVertex(333, 331, 142, 138, 190, 301);
endShape(CLOSE)

console.log("mouseX: "+ mouseX+" mouseY: "+ mouseY)
//function windowResized(){
  //resizeCanvas(windowWidth, windowHeight);
}

// function myTriangle(amountOfWindow, x, y){
//   push()
//   const size = width * amountOfWindow;
//   //triangleMode(CENTER);
//   translate(x,y);
//   triangle(0, 0, size, size*2 -size, size*2);
//   pop();
// }



