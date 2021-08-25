class Attractor {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
    this.color = color(
      floor(random(255)),
      floor(random(255)),
      floor(random(255)),
      175
    );
  }

  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let G = 1;
    let strength = G * ((this.mass * mover.mass) / distanceSq);
    force.setMag(strength);
    mover.applyForce(force);
  }

  draw() {
    stroke(this.color);
    strokeWeight(2);
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
