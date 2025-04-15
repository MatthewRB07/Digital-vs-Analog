let digitalState = false;
let analogValue = 480;
function setup() {
  createCanvas(800, 400);
}
function draw() {
  background(255);
  textSize(32);
  fill(0);
  text("Digital", 220, 80);
  text("Analog", 580, 80);

  fill(184, 184, 184); //Both Rect colour
  rect(100, 100, 240, 200,22.5);
  rect(460, 100, 240, 200,22.5);
  noStroke();

  fill(digitalState ? "green" : "white");
  rect(180, 160, 80, 80 , 22.5);
  textAlign(CENTER);
  text(digitalState ? "ON" : "OFF", 220, 280);

  fill(255);
  rect(480, 160, analogValue - 480, 80, 22.5);
  textAlign();
  text("Level: " + (analogValue - 480), 580, 280);
}
function keyPressed() {
  if (keyCode === 32) {
    digitalState = !digitalState;
  }
  if (keyCode == RIGHT_ARROW) {
    analogValue = constrain(analogValue + 25, 480, 680);
  }
  if (keyCode == LEFT_ARROW) {
    analogValue = constrain(analogValue - 25, 480, 680);
  }
}