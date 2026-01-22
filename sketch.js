function setup() {
  createCanvas(435,420);
}

//function windowResized(){
  //resizeCanvas(windowWidth, windowHeight);
//

function draw() {
  background(255, 0, 0);


beginShape();
fill(0, 255, 0);
  vertex(15, 17);
  bezierVertex(511, 362, 142, 138, 208, 322);

endShape(CLOSE)

beginShape();
  fill(255, 0, 0);
  noStroke();
  vertex(15, 17);
  quadraticVertex(238, 317, 153, 108);
endShape(CLOSE)

ellipseMode(CORNER);
const size = width * 0.3;
fill(0, 0, 255);
ellipse(15, 350, 400, 50);

console.log("mouseX: "+ mouseX+" mouseY: "+ mouseY)

}





