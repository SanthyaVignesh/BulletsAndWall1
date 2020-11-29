var bullet,speed,weight;
var wall,thickness ,deformation ;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);
  speed = random(223,321);
  weight = random(30,100);
  bullet.velocityX= speed;

  thickness = random(22,83);
  wall = createSprite(1400,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    deformation = (0.5*speed*speed*weight)/(thickness*thickness*thickness);
    if(deformation<=10){
      wall.shapeColor = "green";
    }
    else{
      wall.shapeColor = "red";
    }
  }
  drawSprites();
}

function hasCollided(object1,object2){
  object1rightEdge = object1.x + object1.width/2;
  object2leftEdge = object2.x - object2.width/2;
  if(object1rightEdge >= object2leftEdge){
    return true;
  }
 
    return false;
}