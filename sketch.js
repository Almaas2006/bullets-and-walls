var wall,bullet;
var speed, weight, thickness;




function setup() {
  createCanvas(1600,400);

  speed= random(223,321);
  weight= random(30,52);
  thickness=random(22,83);

 bullet = createSprite(50,200,50,5);
 wall= createSprite(1200,200,thickness,height/2);

 bullet.shapeColor="blue";
 wall.shapeColor="grey";

 bullet.velocityX= speed;

  
}

function draw() {
  background("black");  

if(hasCollided(bullet,wall))
{
 bullet.velocityX=0;
 var damage=0.5*bulletweight*bulletspeed*bulletspeed/thickness*thickness*thickness;
 if( damage<10)
 {
   car.shapeColor="red";
 }
if(damage>10)
{
  car.shapeColor="yellow";
}

}
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletre= lbullet.x+ lbullet.width;
  wallle= lwall.x;
  if(bulletre>=wallle)
  {
    return true;

  }
  return false;
}