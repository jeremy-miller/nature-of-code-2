let attractor;
let movers = [];

function setup() {
  createCanvas(400, 400);
  attractor = new Attractor(width / 2, height / 2, 100);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let m = random(50, 150);
    movers[i] = new Mover(x, y, m);
  }
}

function draw() {
  background(0);
  attractor.draw();
  for (let mover of movers) {
    mover.update();
    mover.draw();
    attractor.attract(mover);
  }
}
