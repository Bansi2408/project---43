var backImage, backgr;
var player, player_running;
var ground, ground_img;
var bananaImage, gameOverImage, stoneImage;
var foodGroup, obstaclesGroup;
var fruits, stones;

var score;

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png",
  "Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png",
  "Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("stone.png");
  gameOverImage = loadImage("gameOver.png");

  foodGroup = new Group();
  obstaclesGroup = new Group();

}

function setup() {
  createCanvas(800,400);

  score = 0;
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }

  if(frameCount%200===0){
    fruits();
 }
  
  if(frameCount%300===0){
    stones();
 }

  if(foodGroup.isTouching(player)){
    foodGroup.destroyEach();
    score = score + 2;
    player.scale += + 0.1;

    if(obstaclesGroup.isTouching(player)){
      gameState = END;
    }
  }else if(gameState === END){
    backgr.velocityX = 0;
    backgr.visible = false;

    foodGroup.destroyEach();
    obstaclesGroup.destroyEach();

    textSize(30);
    fill(255);
    text("Game Over!",300,220);
  }

  drawSprites();
  fill("white") 
  text("Score: "+ score, 500,50);
}

function spawnFood(){
  if(farmeCount % 80 === 0){
    var banana = createSprite(600,240,40,10);
    banana.y = random(120,200);
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -4;

    banana.lifeTime = 300;
    player.depth = banana.depth +1;
    foodGroup.add(banana);
  }
}

function fruits(){
  banana=createSprite(670,Math.round(random(170,230)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3;
  FoodGroup.add(bananaImage);
}

function stones(){
  obstacle=createSprite(670,380,10,10);
  obstacle.addImage(obstaceImage);
  obstacle.velocityX=-4;
  obstacle.scale=0.2;
  obstacleGroup.add(stoneImage);
}