var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup;
var score=0
var ground;

var survivalTime=0;
var jungle,jungle_image;


function preload(){
   monkey_running =             loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
 bananaImage = loadImage("banana.png");
 obstaceImage = loadImage("obstacle.png");
  jungle_image=loadImage("jungle.jpg")
 }

function setup() {
createCanvas(600,600) ;
 jungle=createSprite(300,0,20,20)
jungle.addImage(jungle_image)
monkey = createSprite(50,250,20,20)
monkey.addAnimation("monkeyrunning",monkey_running)
monkey.scale= 0.1
bananaGroup=createGroup();
obstacleGroup=createGroup();
}

function draw() {
  background("123")
  ground=createSprite(600,284,600,15)  
  ground.velocityX=-4
  ground.shapeColor="grey"
  ground.x=ground.width/2
  monkey.collide(ground)
  ground.visible=false
  
jungle.velocityX=-3
if(jungle.x<100){
jungle.x=jungle.width/2;
}
 
   drawSprites()
   stroke("black")
   fill("yellow")
  textSize(15)
   text("Score: "+ score, 500,50);
  
   survivalTime=Math.ceil(frameCount/frameRate())
  text("survivaltime:"+survivalTime,290,90)
  
 if(keyDown("space")&& monkey.y>=100){
  monkey.velocityY=-12
  // monkey.velocityY = monkey.velocityY + 0.8
}
   monkey.velocityY = monkey.velocityY + 1
   food()
   stone()

  if(bananaGroup.isTouching(monkey)){
   bananaGroup.destroyEach()
   score=score+2
}

switch(score){
  case 10 : monkey.scale=0.12
            break;
  case 20 : monkey.scale=0.14
            break;
  case 30: monkey.scale=0.16
            break;
  case 40 : monkey.scale=0.18
            break;
       
       default:break;
}
 if(obstacleGroup.isTouching(monkey)){
   monkey.scale=0.1
   score=0
 }

}
 
function food(){
    if(frameCount % 80===0){
    banana= createSprite(600,300,20,20)
    banana.y=Math.round(random(120,200))
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-4
    banana.lifetime= 300
    bananaGroup.add(banana)
   }
}
function stone(){
  if(frameCount % 80===0){
    obstacle= createSprite(600,600,20,20)
    obstacle.y=Math.round(random(265,268))
    obstacle.addImage(obstaceImage)
    obstacle.scale=0.1
    obstacle.velocityX=-5
    obstacle.lifetime=300
    obstacleGroup.add(obstacle)
   }
}
  
 








