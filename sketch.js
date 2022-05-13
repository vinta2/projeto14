var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  doorsGroup = new Group()
  climbersGroup = new Group()
  ghost = createSprite(300,300)
  ghost.addImage(ghostImg)
  ghost.scale = 0.5
}

function draw() {
  background(200);
  drawSprites()
  if(tower.y > 400){
      tower.y = 300
    }
    portas()
    if(keyDown("right")){
    ghost.x=ghost.x+3
    }
    if(keyDown("left")){
      ghost.x=ghost.x-3
    }
    if(keyDown("space")){
    ghost.velocityY =-4
    }
    ghost.velocityY=ghost.velocityY+0.3
    if(ghost.isTouching(doorsGroup)|| ghost.y>600){
    gameState="end"
    ghost.x=0
    ghost.y=0
    }
    if(gameState==="end"){
    ghost.destroy()
    doorsGroup.destroyEach()
    climbersGroup.destroyEach()
    tower.destroy()
    textSize(20)
    text("fim de jogo",250,300)
    }
}
function portas(){
if(frameCount%240===0){
var door = createSprite(200,-50)
door.addImage(doorImg)
door.x=random(120,400)
door.velocityY = 1;
door.lifetime=800
doorsGroup.add(door)
climber = createSprite(door.x,0)
climber.addImage(climberImg)
climber.velocityY = 1
climber.lifetime=800
climbersGroup.add(climber)
door.depth=ghost.depth 
ghost.depth=ghost.depth+1
}
}