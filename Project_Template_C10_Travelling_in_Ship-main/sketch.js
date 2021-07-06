var seasprite;
var ship;
var seaImg;
var shipImg;
function preload()
{
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship1.png");
}

function setup()
{
  createCanvas(3000,800);
  seasprite = createSprite(400,180,600,20);
  seasprite.velocityX = -20;
  seasprite.addImage("sea",seaImg);
}

function draw()
 {
  background("blue"); 
  ship = createSprite(300,180,600,50);

  ship.addAnimation("ships",shipImg);
 ship.scale=0.5;

 if(seasprite.x<0)
 {
   seasprite.x= seasprite.width/2;
 }
 drawSprites();
}

