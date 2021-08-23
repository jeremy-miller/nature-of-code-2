let walker;

function setup() {
  createCanvas(400, 400);
  background(0); // only set background once, so previous points aren't overwritten and appear as a path
  walker = new Walker(width / 2, height / 2);
}

function draw() {
  walker.update();
  walker.draw();
}
