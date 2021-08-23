let inc = 0.01;
let yOff = 0;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1); // ensure each pixel on screen maps to 1 pixel of display (no HiDPI)
  noiseDetail(24, 0.5); // how many octaves of Perlin noise to use, and how much affect each has
  frameRate(24);
}

function draw() {
  loadPixels();
  for (let y = 0; y < height; y++) {
    let xOff = 0; // reset xOff on every row, so pixels above/below eachother are similar
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let r = noise(xOff, yOff) * 255;
      pixels[index + 0] = r; // red
      pixels[index + 1] = r; // green
      pixels[index + 2] = r; // blue
      pixels[index + 3] = 255; // alpha
      xOff += inc;
    }
    yOff += inc;
  }
  updatePixels();
}
