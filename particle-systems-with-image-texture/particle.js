class Particle extends p5.Vector {
  constructor(x, y) {
    super(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.r = 64;
    this.lifetime = 255;
  }

  finished() {
    return this.lifetime < 0;
  }

  // Newton's second law
  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.add(this.vel);
    this.acc.set(0, 0);
    this.lifetime -= 6;
  }

  draw() {
    // stroke(255, this.lifetime);
    // strokeWeight(2);
    // fill(255, this.lifetime);
    // ellipse(this.x, this.y, this.r * 2);
    imageMode(CENTER);
    blendMode(ADD);
    tint(255, 100, 100, this.lifetime);
    image(img, this.x, this.y, this.r, this.r);
  }
}
