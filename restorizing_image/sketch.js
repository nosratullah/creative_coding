let img;
function setup() {
  createCanvas(800, 800);
  img.loadPixels();
}

function draw() {
  background(220);
  // image(img, 0, 0);
  // image(img, 0, 0, 800, 800);

  for (let x = 0; x < img.width; x += 5) {
    for (let y = 0; y < img.height; y += 5) {
      push();
      translate(100, 100);
      let index = 4 * (x + y * img.width);
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let intensity = (r + g + b) / 3;
      let diameter = map(intensity, 0, 255, 10, 1);
      let diameter_inv = map(intensity, 0, 255, 1, 10);
      let noise_val = noise(x * 0.01, y * 0.01, frameCount * 0.1);
      // noise_val = sin(frameCount * 1);
      // color(10, 50, 100);
      // fill(r, g, b);
      ellipse(x, y, diameter);
      ellipse(x, y, diameter_inv);
      pop();
    }
}
}

function preload(){
  img = loadImage('img/portrait.jpeg')
}