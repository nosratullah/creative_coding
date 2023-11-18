var square_size = 10;
var angle = 0;
var noiseScale = 0.2; // Adjust this value to change the 'smoothness' of the noise
var radius = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
  frameRate(22)
}

function draw() {
  background('black');
  square_move();
}

function square_move(){
  
  for (var i = 0; i < windowWidth/square_size; i++) {
    for (var j = 0; j < windowWidth/square_size; j++) {
      noFill();
      // stroke('white');
      push();
      translate(i * 15 + square_size/2, j * 15 + square_size/2);
      var t = millis() / 500 + sin(i*10) + sin(j*10);
      stroke(50, 50, 100);
      rect(0, 0, square_size, square_size);
      
      // Calculate the x and y positions of the dot
      var x, y;
      if (t % 4 < 1) {
        // Move from (x/2, x/2) to (-x/2, x/2)
        x = map(t % 1, 0, 1, square_size/2, -square_size/2);
        y = square_size/2;
      } else if (t % 4 < 2) {
        // Move from (-x/2, x/2) to (-x/2, -x/2)
        x = -square_size/2;
        y = map(t % 1, 0, 1, square_size/2, -square_size/2);
      } else if (t % 4 < 3) {
        // Move from (-x/2, -x/2) to (x/2, -x/2)
        x = map(t % 1, 0, 1, -square_size/2, square_size/2);
        y = -square_size/2;
      } else {
        // Move from (x/2, -x/2) to (x/2, x/2)
        x = square_size/2;
        y = map(t % 1, 0, 1, -square_size/2, square_size/2);
      }
      // Draw the dot
      // transpareny = map(t % 4, 0, 1, 0, 100);
      transpareny = 256;
      fill(256,256,256, transpareny);
      ellipse(x, y, radius,radius);
      
      pop();

    }
  }
}
