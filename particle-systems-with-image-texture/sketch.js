let emitter;
let img;

function preload() {
  img = loadImage("texture32.png");
}

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, height - 25);
}

function draw() {
  clear();
  background(0);

  let force = createVector(0, -0.1);
  emitter.emit(4);
  emitter.applyForce(force);
  emitter.update();
  emitter.draw();
}
