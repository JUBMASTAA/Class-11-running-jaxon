var path;
var pathimage;
var boy;
var boyimage;

var leftEdge;
var rightEdge;


function preload(){
  //pre-load images

  pathimage = loadImage ("path.png")
  boyimage = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);

  path = createSprite (200,200);
  path.addImage(pathimage);
  path.scale = 1.2;
  path.velocityY = 4;

 boy = createSprite (200,320);
 boy.addAnimation("boyanimation", boyimage);
 boy.scale = 0.1;

 leftEdge = createSprite (100,200,10,400);
 rightEdge = createSprite (100,200,10,400);
}

function draw() {
  background(0);

  if (path.y > 400){
    path.y = height/2; 
  }
  boy.x = World.mouseX;
  boy.bounceOff (leftEdge);
  boy.bounceOff (rightEdge);
  drawSprites();
}
