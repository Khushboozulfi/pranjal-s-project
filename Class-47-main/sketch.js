
var gameState = 0;
var playerCount;
var database;
var player;
var game;

var harry;
var ron;
var hermoine;
var award,awardImg
var harryImg;
var ronImg;
var hermoineImg;

var snitch, snitchImg;
var spriteBg;



function preload()
{
  bg= loadImage("pics/grass.jpeg");
  harryImg = loadImage("pics/harry.png");
  ronImg = loadImage("pics/ron.png");
  hermoineImg = loadImage("pics/hermoine.png");
awardImg=loadImage("pics/award.png");
snitchImg=loadImage("pics/snitch.png")
}


function setup() {
  createCanvas(800, 800);
  spriteBg = createSprite(600,600,1200,1200);
  spriteBg.addImage(bg);
  spriteBg.scale = 2
  spriteBg.velocityY = 3
  

  harry = createSprite(200,displayHeight-200);
  harry.addImage(harryImg)
  harry.scale=0.26
  ron = createSprite(400,displayHeight-200); 
  ron.addImage(ronImg)
  ron.scale=0.35
  hermoine = createSprite(600,displayHeight-200);
  hermoine.addImage(hermoineImg)
  hermoine.scale=0.2

award=createSprite(100,60,100,100)
award.addImage("award",awardImg);
award.scale=0.5

   
 
}

function draw() {
  

  if (spriteBg.y>320)
  {
    spriteBg.y = 300;
  }
  background("white");
  
  if (keyDown("UP_ARROW"))
  {
    harry.y = harry.y -2
  }

  if (keyDown("DOWN_ARROW"))
  {
    harry.y = harry.y +2
  }

  if (keyDown("LEFT_ARROW"))
  {
    harry.x = harry.x-2
  }

  if (keyDown("RIGHT_ARROW"))
  {
    harry.x = harry.x+2
  }
  if (keyDown("S"))
  {
   ron.x = ron.x +2
  }

  if (keyDown("A"))
  {
    ron.x = ron.x-2
  }
  if (keyDown("L"))
  {
   hermoine.x = hermoine.x +2
  }

  if (keyDown("K"))
  {
    hermoine.x = hermoine.x-2
  }

  getSnitch();

drawSprites()
textSize(15);
  fill("#F9D022");
  text("Use Left and Right Arrow Keys to move Harry!!",150,70)
  text("Use A and S Keys to move Ron!!",500,70)
  text("Use J and K Keys to move Harmoine!!",300,110)
}

function getSnitch(){
if(frameCount%500===0){
  var snitch=createSprite(400,100,100,100);
  snitch.addImage(snitchImg);
    snitch.scale=0.1;
  snitch.velocityX= Math.round(random(-3,3));
  snitch.velocityY=Math.round(random(-2,2))
}
}