let emitters = [];
let gravity;

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}

function setup() {
  createCanvas(400, 400);
  gravity = createVector(0, 0.1);
}

function draw() {
  background(0);

  emitters.forEach((emitter) => {
    emitter.applyForce(gravity);
    emitter.emit(5);
    emitter.update();
    emitter.draw();
  });
}
