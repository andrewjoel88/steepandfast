function setup() {
  createCanvas(windowWidth,windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 0, 0);

beginShape();
  vertex(15, 17);
  bezierVertex(333, 331, 142, 138, 190, 301);
endShape(CLOSE)

beginShape();
  vertex(15, 17);
  quadraticVertex(238, 317, 153, 108);
endShape(CLOSE)

console.log("mouseX: "+ mouseX+" mouseY: "+ mouseY)

}





