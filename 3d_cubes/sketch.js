let smallCube = 10;
let bigCube = 20;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(50, 50, 50);
  
  for(let i = -10; i < 10; i++) {
    for(let j = -10; j < 10; j++) {
      push();
      translate(i * (smallCube+bigCube+10), j * (smallCube+bigCube+10), 0);
      let n = noise(i * 0.1, j * 0.1, frameCount * 0.02);
      if(n>0.5) {
        rotateX(n * TWO_PI);
      // rotateY(n * TWO_PI);
       rotateZ(n * TWO_PI);
        }
      fill('black');
      stroke('white');
      box(smallCube);
      noFill();
      stroke('black');
      box(bigCube);
      pop();
    }
  }
}
