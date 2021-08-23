let xOff1 = 0;
let xOff2 = 0.2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let x = map(noise(xOff1), 0, 1, 0, width);
  let y = map(noise(xOff2), 0, 1, 0, height);
  
  ellipse(x, y, 25, 25);
  
  xOff1 += 0.02;
  xOff2 += 0.02;  
}