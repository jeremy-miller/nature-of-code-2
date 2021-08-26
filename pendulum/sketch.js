let angle, bob, armLength, origin;
let angleVel = 0;
let angleAcc = 0;
let gravity = 1;

function setup() {
  createCanvas(600, 400);
  origin = createVector(width / 2, 0);
  angle = PI / 4;
  bob = createVector();
  armLength = 300;
}

function draw() {
  background(0);
  stroke(255);
  fill(127);
  strokeWeight(8);

  let force = gravity * sin(angle);
  angleAcc = (-1 * force) / armLength;
  angleVel += angleAcc;
  angle += angleVel;
  bob.x = armLength * sin(angle) + origin.x;
  bob.y = armLength * cos(angle) + origin.y;

  line(origin.x, origin.y, bob.x, bob.y);
  circle(bob.x, bob.y, 64);
}
