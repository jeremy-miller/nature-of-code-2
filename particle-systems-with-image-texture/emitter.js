class Emitter {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.particles = [];
  }

  emit(num) {
    for (let i = 0; i < num; i++) {
      this.particles.push(new Particle(this.position.x, this.position.y));
    }
  }

  applyForce(force) {
    this.particles.forEach((particle) => {
      particle.applyForce(force);
    });
  }

  update() {
    this.particles.forEach((particle) => {
      particle.update();
    });

    for (let i = this.particles.length - 1; i >= 0; i--) {
      if (this.particles[i].finished()) {
        this.particles.splice(i, 1);
      }
    }
  }

  draw() {
    this.particles.forEach((particle) => {
      particle.draw();
    });
  }
}
