let snake;
let food;
let gridSize = 20;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let cols = floor(width / gridSize);
  let rows = floor(height / gridSize);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(gridSize);
}

function draw() {
  background(220);
  snake.update();
  snake.show();
  
  if (snake.eat(food)) {
    foodLocation();
  }
  
  fill(255, 0, 0);
  rect(food.x, food.y, gridSize, gridSize);
}

function keyPressed() {
  if (keyCode === UP_ARROW && snake.ySpeed !== 1) {
    snake.setDirection(0, -1);
  } else if (keyCode === DOWN_ARROW && snake.ySpeed !== -1) {
    snake.setDirection(0, 1);
  } else if (keyCode === LEFT_ARROW && snake.xSpeed !== 1) {
    snake.setDirection(-1, 0);
  } else if (keyCode === RIGHT_ARROW && snake.xSpeed !== -1) {
    snake.setDirection(1, 0);
  }
}

class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(floor(width / gridSize / 2), floor(height / gridSize / 2));
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.len = 0;
  }

  setDirection(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }

  update() {
    let head = this.body[this.body.length - 1].copy();

    this.body.shift();

    head.x += this.xSpeed;
    head.y += this.ySpeed;

    if (head.x > width - gridSize) head.x = 0;
    else if (head.x < 0) head.x = width - gridSize;

    if (head.y > height - gridSize) head.y = 0;
    else if (head.y < 0) head.y = height - gridSize;

    this.body.push(head);
  }

  eat(pos) {
    let head = this.body[this.body.length - 1];
    if (head.x === pos.x && head.y === pos.y) {
      this.len++;
      this.body.push(head.copy());
      return true;
    }
    return false;
  }

  show() {
    for (let i = 0; i < this.body.length; i++) {
      fill(0);
      rect(this.body[i].x, this.body[i].y, gridSize, gridSize);
    }
  }
}

