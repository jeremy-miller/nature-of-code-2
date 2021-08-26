let angles = [];
let angleVel = [];
let r = 4;

function setup() {
  createCanvas(600, 400);
  let totalCircs = floor(width / (r * 2));
  for (let i = 0; i < totalCircs; i++) {
    angles[i] = map(i, 0, totalCircs, 0, 2 * TWO_PI);
  }
}

function draw() {
  background(0);
  translate(300, 200);
  fill(252, 238, 33);
  stroke(252, 238, 33);
  strokeWeight(4);
  for (let i = 0; i < angles.length; i++) {
    let x = map(i, 0, angles.length, -300, 300);
    let y = map(sin(angles[i]), -1, 1, -200, 200);
    circle(x, y, r * 2);
    angles[i] += 0.02;
  }
}
