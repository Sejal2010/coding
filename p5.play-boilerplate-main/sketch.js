var rocket,rock,space;

function preload(){
rocket=loadImage("./images coding/rocket.png");
rock=loadImage("./images coding/rock.png");
space=loadImage("./images coding/space.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(space);  
  drawSprites();
}