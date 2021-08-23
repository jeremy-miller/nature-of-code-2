let mover;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(width / 2, height / 2);
}

function draw() {
  background(0);
  mover.update();
  mover.draw();
}
