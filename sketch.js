
var car, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
 speed = random(220,230);
 weight = random(30,55);
 thickness = random(22,83);

 car = createSprite(50,200,10,10);
 wall = createSprite(1500,200,thickness, height/2);
 wall.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.velocityX = speed;

  if(wall.x-car.x < (car.width-wall.width)/2){
    car.velocityX = 0;
    var destruction = weight * speed * 0.5 * speed/(thickness*thickness*thickness);
    if(destruction>10){
      car.shapeColor = color(255,0,0);
      wall.shapeColor = color(255,0,0);

    }
    if(destruction<10){
      car.shapeColor = color(0,255,0);
      wall.shapeColor = color(0,255,0);
    }

    
  }
}