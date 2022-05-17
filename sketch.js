
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject;
var asteroidImg;
var world,boy;
var launcherObject;
var launchForce = 100;
var asteroidGroup,meteoriteGroup,villagerGroup;
var villager;
var position;
var villager1,villager2,villager3,villager4;
var score = 0;






function preload(){
	boy=loadImage("images/boy.png");
  backgroundImg = loadImage("images/newback.png");
   asteroidImg = loadImage("images/aqsteroid.png");
   meteoImg = loadImage("images/download (1).png");
   villlager1 = loadImage("images/villagerlady.png");
   villlager2 = loadImage("images/villagerwomen.jpg");
   villlager3 = loadImage("images/images.png");
   villlager4 = loadImage("images/images(1).png");
  }

function setup() {
	createCanvas(1300, 600);
  //  backGround = createSprite(width/2,height/2,10,10);
  //  backGround.addImage(backgroundImg);
  //  backGround.scale = 6.2;
  //  Boy = createSprite(200,340);
  //  Boy.addImage(boy);
  //  Boy.scale = 0.15;

	engine = Engine.create();
	world = engine.world;

  asteroidGroup = new Group();

  villagerGroup = new Group();

 meteoriteGroup = new Group();
  // problem in displaying the launcher object due to background

   

  stoneObj=new stone(235,420,30); 

  launcherObject =new Launcher(stoneObj.body,{x:235,y:420});

}

function draw() {
  background(backgroundImg);
  textSize(25);
   text("Press Space to get a second Chance to Play!!",50 ,50);
   text("Score: "+score,1000,50);
   

  stoneObj.display();
    
 launcherObject.display();
  
 
  image(boy ,200,340,200,300);

 
  drawSprites();

  Asteroids();
  meteorites();
  villagers();
}
  
  


function mouseDragged(){

  Matter.Body.setPosition(stoneObj.body, {x:mouseX,y:mouseY});

}
 
function mouseReleased(){

 launcherObject.fly();
 
}
       

// making the stone get into constraint if the space bar is pressed
function keyPressed(){
  if (keyCode === 32)
{
  Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
  launcherObject.attach(stoneObj.body);
}}

function villagers(){
  if (frameCount % (Math.round(random(100,500)))===0){
    villager = createSprite(1200,450,10,10); 
    villager.velocityX=-8;
    r = Math.round(random(1,4));
       console.log(r);

    if(r===1){
      villager.addImage(villlager1);
      villager.scale=0.2
    }

    if(r===2){
      villager.addImage(villlager2);
    }

    if(r===3){
      villager.addImage(villlager3);
    }

    if(r===4){
      villager.addImage(villlager4);
    }
  


    position = Math.round(random(1,2));

  //  console.log(position);
       if(position==1)
     {
     villager.x = 1300;  
     villager.velocityX=-8;}
     
       else if(position==2){
           villager.x = 0;
           villager.velocityX=8;
         }

  }
         
 
}

function meteorites(){
    
  if(frameCount % 100 ===0){
    meteorite = createSprite(50,-10,50,50);
   meteorite.x = Math.round(random(100,1200));
   meteorite.y = Math.round(random(-10,1200));
   meteorite.velocityY = 0.5;
    meteorite.addImage(meteoImg);
    meteoriteGroup.add(meteorite);
    
   
}
}
 
  function Asteroids(){
    
    if(frameCount % 100 ===0){
      asteroid = createSprite(50,-10,50,50);
      asteroid.x = Math.round(random(100,1200));
      asteroid.velocityY = 0.5;
      asteroid.addImage(asteroidImg);
      asteroid.scale = 0.2;
      asteroidGroup.add(asteroid);
    
    }
  }