let pursuer;
let target;

function setup() {
  createCanvas(600, 500);
  pursuer = new Vehicle(100, 100);
  target = new Target(200, 100);
}

function draw() {
  background(0);

  let steering = pursuer.seek(target.pos);
  pursuer.applyForce(steering);
  pursuer.update();
  pursuer.draw();

  target.draw();
}
