let particles = [];
let springs = [];
let spacing = 20;
let k = 0.1;
let gravity;

function setup() {
  createCanvas(600, 500);
  for (let i = 0; i < 15; i++) {
    particles[i] = new Particle(width / 2, i * spacing);
    if (i !== 0) {
      let a = particles[i];
      let b = particles[i - 1];
      let spring = new Spring(k, spacing, a, b);
      springs.push(spring);
    }
  }
  particles[0].locked = true;
  gravity = createVector(0, 0.1);
}

function draw() {
  background(0);

  for (let s of springs) {
    s.update();
    s.draw();
  }

  for (let p of particles) {
    p.applyForce(gravity);
    p.update();
    // p.draw();
  }

  let tail = particles[particles.length - 1];

  if (mouseIsPressed) {
    tail.position.set(mouseX, mouseY);
    tail.velocity.set(0, 0);
  }
}
