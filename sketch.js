var boy,path,leftBoundry,rightBoundry
var boyImg,pathImg
function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  boyImg = loadAnimation("Runner-1.png","Runner-2.png")
}
 
function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.scale = 1.2;
  path.velocityY = 5
  

  boy = createSprite(180,340,50,50);
  boy.addAnimation("Jaxon_running",boyImg);
  boy.scale = 0.1;

  leftBoundry = createSprite(0,0,100,800)
  leftBoundry.visible = false

  rightBoundry = createSprite(410,0,100,800)
  rightBoundry.visible = false
}
 
function draw() {
  background(0);
  boy.x = World.mouseX

  edges = createEdgeSprites()
  boy.collide(edges[3])
  boy.collide(leftBoundry)
  boy.collide(rightBoundry)
  
 drawSprites()
 if(path.y>400){
   path.y = height/2
 }
}
