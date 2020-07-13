var car,wall;
var speed,weight;

function setup() {
  createCanvas(600,400);
  car = createSprite(100,200,70,40);
  wall = createSprite(500,200,50,100);
  wall.shapeColor = "blue";
speed = random(45,90);
weight = random(400,1500);
}

function draw() {
  background(255,255,255);
car.velocityX = speed;  
  if(wall.x-car.x<wall.width/2+car.width/2){
car.velocityX = 0;
var deformation = 0.5*weight*speed*speed/22500;
if(deformation<100){
  car.shapeColor = "green";
}
if(deformation>100 &&deformation<170){
  car.shapeColor = "yellow";
}
if(deformation>170){
  car.shapeColor = "red";
}
  }
  drawSprites();
}    