// VARIABLES
var speed;
var d = 0;
var r
var g
var b
var fillVal = 255;
var x
var y
ball = {
  x: 300,
  y: 200,
  Axspeed: 8,
  Byspeed: -8

}

function setup() {
  createCanvas(800, 600);
  frameRate(50);


  // INSTRUCTIONS FOR INSTALLATION

  textSize(32);
  fill(0);
  text("Click", 10, 30);

  text("Shift", 10, 60);

  text("Arrow Up = White", 10, 90);

  text("Arrow Down = Black", 10, 120);

  text("Arrow Left/Right = random", 10, 150);
}

function draw() {

  MovingBalls();
  BouncingBall();
 
}

function MovingBalls() {
  noStroke();
  fill(fillVal, 10);

  for (var x = 0; x <= width; x += 40) {
    for (var y = 0; y <= width; y += 40) {
      ellipseMode(CENTER)
      ellipse(x, y, d, d);
    }
  }

  speed = .5;
  d = d + speed;
  if (d > 50) {
    d = -speed
  }
}

function BouncingBall() {
  noStroke(255);
  fill(240);
  ellipse(ball.x, ball.y, random(1, 50));

  if (ball.x > width || ball.x < 0) {
    ball.Axspeed = ball.Axspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.Byspeed = ball.Byspeed * -1;
  }
  ball.x = ball.x + ball.Axspeed;
  ball.y = ball.y + ball.Byspeed;
}


function mousePressed() {
  clear();
}


//INTERACTION WITH THE KEYBOARD
function keyPressed() {

  if (keyCode == UP_ARROW) {
    fillVal = 255;
  } else if (keyCode == DOWN_ARROW) {
    fillVal = 0;
  } else if (keyCode == LEFT_ARROW) {
    fillVal = 100;
  } else if (keyCode == RIGHT_ARROW) {
    fillVal = 200;
  } else if (keyCode == 16) {
    background(r, b, g);
    r = random(0, 255);
    b = random(0, 255);
    g = random(0, 255);
  } else if (keyCode == 32) {
    fastSlow = 200;
  }
  return false;
}


//IDEAS TO LOOK AT
//MAKE ALPHA A VARIABLE?
//MAKE FRAME RATE A VARIABLE?
//TRY TO CHANGE LEFT AND RIGHT TO COLOURS