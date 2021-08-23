class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.prev = this.pos.copy();
  }

  update() {
    this.prev.set(this.pos);
    let step = p5.Vector.random2D();
    
    // Levy flight
    let r = random(100);
    if (r < 1) {
      // make large jump 2% of time
      step.mult(random(25, 100));
    } else {
      // otherwise make small jumps
      step.mult(random(1, 3));
    }

    this.pos.add(step);
  }

  draw() {
    stroke(255);
    strokeWeight(2);
    line(this.prev.x, this.prev.y, this.pos.x, this.pos.y);
  }
}
