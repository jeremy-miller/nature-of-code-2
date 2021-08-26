class Wave {
  constructor(amplitude, period, phase) {
    this.amplitude = amplitude;
    this.period = period;
    this.phase = phase;
  }

  evaluate(x) {
    return sin(this.phase + (TWO_PI * x) / this.period) * this.amplitude;
  }

  update() {
    this.phase += 0.05;
  }
}
