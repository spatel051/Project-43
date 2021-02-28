var hr, mn, sc, scAngle, mnAngle, hrAngle;

function setup() {

  createCanvas(800,400);
  angleMode(DEGREES);

}
function draw(){
  background(0, 0, 0); 

  hr = hour();
  mn = minute();
  sc = second();

  translate(width/2, height/2);
  rotate(-90);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(8);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("green");
  strokeWeight(9);
  line(0,0,50,0);
  pop();

  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  stroke(0,0,255);
  arc(0,0,270,270,0,mnAngle);
  
  stroke(0,255, 0);
  arc(0,0,240,240,0,hrAngle);
  rotate(90);
}