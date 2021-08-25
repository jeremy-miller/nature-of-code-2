class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 20;
    this.color = color(
      floor(random(255)),
      floor(random(255)),
      floor(random(255)),
      175
    );
  }

  drag() {
    // direction of drag
    let drag = this.vel.copy();
    drag.normalize();
    drag.mult(-1);

    // magnitude of drag
    let c = 0.15; // coefficient of drag (and other constants)
    let speedSq = this.vel.magSq();
    drag.setMag(c * speedSq);

    this.applyForce(drag);
  }

  // Newton's second law
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }
    if (this.pos.x <= 0 + this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    } else if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  draw() {
    stroke(this.color);
    strokeWeight(2);
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.r);
  }
}
