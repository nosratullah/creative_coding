var square_size = 10;
var angle = 0;
var noiseScale = 0.2; // Adjust this value to change the 'smoothness' of the noise
var radius = 5;

function setup() {
  createCanvas(1000, 1000);
  
  // noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
  frameRate(22)
}

function draw() {
  // cluster();
  grid();
  
}

function grid(){
  background('black');
  square_move();
  
}

function square_move(){
  
  for (var i = 0; i < 70; i++) {
    for (var j = 0; j < 70; j++) {
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
function circular_move(){
  for (var i = 0; i < 40; i++) {
    for (var j = 0; j < 20; j++) {
      noFill();
      stroke(100, 100, 100);
      push();
      translate(i * 50 + square_size/2, j * 50 + square_size/2);
      // rect(0, 0, square_size, square_size);
      fill('white');
      var angle = millis() / 1000 * 360; // Change the divisor to adjust the speed of the dot
      // Calculate the x and y positions of the dot
      var x = square_size/2 * cos(angle + i * 10);
      var y = square_size/2 * sin(angle + i * 10);
      // Draw the dot
      ellipse(x, y, 10, 10);
      pop();
      // angle = millis() / 100; // Change the angle with time
    }
  }
}
function cluster(){
  r = 20;
  noStroke();
  for (var cluster = 0; cluster < 5; cluster++) {
    var x = random(600);
    var y = random(1280);
    fill(random(255), random(255), random(255));
    ellipse(x, y, r, r);
    for (var circle = 0; circle < 10; circle++) {
      var distance_x = random(50);
      var distance_y = random(50);
      ellipse(x+distance_x, y+distance_y, r, r);
      fill(random(255), random(255), random(255), random(255));
    }
  }
}