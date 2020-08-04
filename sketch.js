//Game states
var START = 2;
var PLAY = 1;
var END = 0;
var gameState = START;

//Creating the forest background
var forest , forestimage;

//Creating the monkey
var monkey,monkey_running;

//Creating the fruit
var fruitGroup;

//Creating the group for stones
var stoneGroup;

//Creating the group for arrows
var arrowGroup;

//Creating the group for swords
var swordGroup;

//Creating the invisible ground
var ground;

//Making it invivisible
ground.visible = false;

//Creating the invisible ground
var ground2;

//Making it invisible
ground2.visible=false;

//Creating the variable for score
var score = 0;

var faint,fainted;

var swordimage;
var arrowimage;
var fruitimage;
var stoneimage;
var gameOverimage;

//scaling it
faint.scale=0.2;

//Making it invisible
faint.visible=false;


function preload() {
  
//loading the images
forestimage = loadImage("forest.jpg");
fainted = loadImage("emoji.png");
stoneimage = loadImage("sword.png");
arrowimage = loadImage("bow.png");
fruitimage = loadImage("banana.png");
stoneimage = loadImage("stone.png");  
gameOverimage = loadImage("gameOver.png");
  
//loading the animation
monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");  
  
   
}  

function setup() {

//Creating the fruit group
fruitGroup = createGroup();  
  
//Creating the fruit group
stoneGroup = createGroup();  
  
//Creating the fruit group
arrowGroup = createGroup();  
  
//Creating the fruit group
swordGroup = createGroup();  
    
//Creating the monkey
monkey = createSprite(86,9,20,20);

//Adding the animation
monkey.addAnimation("running",monkey_running); 
 
//Scaling it
monkey.scale=0.12;
 
//Creating the fainted emoji
faint = createSprite(monkey.x,monkey.y,2,20);
   
//Adding the image
faint.addImage("faintedg",fainted);  
 
//Scaling it
faint.scale=0.2;   
  
//Creating the forest
forest = createSprite(200,200,20,20);   
  
//Adding the image
forest.addImage(forestimage);  
  
//Scaling it
forest.scale=2;  
   
}  

function draw() {

if(gameState===PLAY){

//Making the forest visible
forest.visible=true;
  
//Making the forest visible
monkey.visible=true;
  
 //Setting velocity for tthe forest
 forest.velocityX=-4;
  
 //Setting the infifnity background 
  if(forest.x<0){
    forest.x=200;
  }  
  
  //Making the monkey to jump
if(keyDown("space")){
  monkey.velocityY=-12;
  monkey.velocityX=0;
}

//Calling the fuction fruits
if(frameCount%160===0){
fruits();
}
  
//Calling the fuction fruits
if(frameCount%150===0){
spawnstones();
}

//Calling the fuction fruits
if(frameCount%170===0){
arrow();
}

//Calling the fuction fruits
if(frameCount%210===0){
sword();
}


if(fruitGroup.isTouching(monkey)){
  //Destroying th fruit
  fruitGroup.destroyEach();
  score=score+1;

}

switch(score){
    
  case 10 : monkey.scale=0.12;
    break
    case 20 : monkey.scale=0.14;
    break
    case 30 : monkey.scale=0.16;
    break
    case 40 : monkey.scale=0.18;
    break
    default:break;
} 
  
  
}

if(gameState===END){
  background("white");
  

//Changing the animation
monkey.changeAnimation("faintedg");
  
  //Stopping the forest
  forest.velocityX=0;
 
 //Destroying the stone
 stoneGroup.destroyEach();
  
//Creating the text  
 var gameOver = createSprite(200,200,1201,20);
 gameOver.addImage(gameOverimage);
   
//Scaling it   
 gameOver.scale=0.3;
  
  //displaying the text
  text("YOU LOSE",200,200);
  
//Making it invisible
fruitGroup.setVelocityXEach(0);
stoneGroup.setVelocityXEach(0);
  
}

//Adding gravity to the monkey
monkey.velocityY=monkey.velocityY+3;
 
//Background  
  background(255);
  
  
//Making the game difficult 
if(stoneGroup.isTouching(monkey)){
  
monkey.scale=0.12;
  
}

if(arrowGroup.isTouching(monkey)){
 
//Changing the gameState  
  gameState=END;
  

}
 
if(swordGroup.isTouching(monkey)){
 
//Changing the gameState  
  gameState=END;
  
} 
 
if(keyDown("space")&&gameState===START){
  gameState=PLAY;
} 
  
//balancing the monkey
monkey.collide(ground);
monkey.collide(ground2); 
  drawSprites(); 
  
  if(gameState===START){
  
//Setting the background  
  background(rgb(255, 0, 0, 0.5));
  
//Making the forest invisible
forest.visible=false;

//Making the monkey invisible
monkey.visible=false;

textSize(30);
textFont("Georgia")
fill("black");
text("MONKEY SURVIVOR",70,200);
textSize(18);
fill("green");
text("Do not leave the monkey down",100,350);
text("To jump press space key",100,300);
text("Press space to start",100,250);
text("Just keep jumping",100,375);
text("Get the bananas to increase yout score",90,319);    
    
}

//Displaying the score
textFont("Georgia")
fill("orange");
textSize(20);
text("Score = "+score,305,33);


  
}       



function fruits()  {
  
//Creating the fruit
var fruit = createSprite(410,randomNumber(131,215),20,20);
fruit.setAnimation("Banana");

//Scaling it
fruit.scale=0.07;

//Setting velocity for the fruit
fruit.velocityX=-5;

//Setting lifetime
fruit.lifetime=400/5;
  
fruitGroup.add(fruit);  
  
}

  
function spawnstones() {
  
//Creating the stone
var stone = createSprite(randomNumber(249,400),356,20,20);
stone.setAnimation("Stone");

//Scaling it
stone.scale=0.15;

//Setting velocity for the stone
stone.velocityX=-6;
 
//Setting the lifetime
stone.lifetime=400/6;
  
//Adding it in the group stone
stoneGroup.add(stone);

}  
  
  
function arrow() {
 
var arrow = createSprite(420,randomNumber(35,370),20,20);
arrow.setAnimation("arrow");

//Scaling it
arrow.scale=0.154;

//Setting velocity for the arrow
arrow.velocityX=-12;

//Setting lifetime for the arrow
arrow.lifetime=400/12;

//adding it in th group arrow
arrowGroup.add(arrow);
 
}
  
  
function sword() {
 
var sword = createSprite(420,randomNumber(35,370),20,20);
sword.setAnimation("sword ")

//Scaling it
sword.scale=0.2; 

//Setting lifetime for the arrow
sword.lifetime=400/12;

//setting velocity for the sword
sword.velocityX=-12;
 
//adding it in th group arrow
swordGroup.add(sword);

}  
  
  
  
  
  
  
  
  
  
