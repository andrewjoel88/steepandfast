function setup() {
  createCanvas(435,420);
}

//function windowResized(){
  //resizeCanvas(windowWidth, windowHeight);
//

function draw() {
  background(132, 177, 186);


beginShape();
fill(199, 96, 28);
  vertex(15, 17);
  bezierVertex(511, 362, 142, 138, 208, 322);

endShape(CLOSE)

beginShape();
  fill(132, 177, 186);
  noStroke();
  vertex(15, 17);
  quadraticVertex(238, 317, 153, 108);
endShape(CLOSE)

ellipseMode(CORNER);
const size = width * 0.3;
fill(49, 35, 117);
ellipse(15, 350, 400, 50);

console.log("mouseX: "+ mouseX+" mouseY: "+ mouseY)

}





