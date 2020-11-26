var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1200,400);

  speed = random(30,52),
  weight = random(223,331);
  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 5);
  bullet.shapeColor = ("black");

  wall = createSprite(1100,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);  

  bullet.velocityX = speed;

}

function draw() {
  background(255,255,255); 
  

  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0;
    var damage = 0.5 * speed * speed / (thickness * thickness * thickness ) 
    
    if(damage < 10){
      wall.shapeColor = color(255,0,0);
    }
    
    if(damage > 10){
      wall.shapeColor = color(0,255,0);
    }
    
    }

  drawSprites();
}


function hasCollided(lbullet,lwall){

bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;


if(bulletRightEdge >= wallLeftEdge ){

  return true;

}
return false;




}








