
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup , food;
var score;
var sprite;
var sprite1,sprite2,sprite3,sprite4,sprite5,sprite6,
    sprite7,sprite8;
    
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  sprite1 = loadImage("sprite_0.png");
  sprite2 = loadImage("sprite_1.png");
  sprite3 = loadImage("sprite_2.png");
  sprite4 = loadImage("sprite_3.png");
  sprite5 = loadImage("sprite_4.png");
  sprite6 = loadImage("sprite_5.png");
  sprite7 = loadImage("sprite_6.png");
  sprite8 = loadImage("sprite_7.png");
  
}



function setup() {
  monkey=createSprite(50,160,20,50)
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(200,195,50000000,10)
  ground.velocityX=4;
  console.log(ground.y)
  
ground=createSprite(200,195,50000000,10)
  ground.velocityX=4;
  console.log(ground.y)
  
  
  monkey.setCollider("circle",0,0,300)
  monkey.debug=false;
  
  obstacleGroup=createGroup();
  foodGroup=createGroup();
  
}


function draw() {
background("lightgreen")
  text("score = 0"+score,350,20)
  
    
 ground.velocityX=-(4+3*score/100);
 score=score+Math.round(getFrameRate()/60);
  
  if(score>0&&score%100===0){ 
  }
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")&& monkey.y >=100){
  monkey.velocityY=-1 
  monkey.velocityX=-1
  }
  
  spawnobstacle()
  spawnfood();
  drawSprites();
}
function spawnobstacle(){
  
  if (frameCount%70===0){
    var obstacle=createSprite(600,160,10,40);
    obstacle.velocityX=-8
    obstacle.scale=0.2
    obstacle.addImage(obstacleImage)
    obstacle.lifetime=100;
  }
  
  
}

function spawnfood(){
  
  if (frameCount%70===0){
    var food=createSprite(500,100,10,10)
    food.addImage(bananaImage);
    food.scale=0.1
    food.velocityX=-6
  }
  
  
  
  
}



