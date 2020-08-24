
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var dustbin1,dustbin3;
var log,logimg;
 
function preload()
{
	
logimg = loadImage("dustbingreen.png");


}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	  ball= new paperBall(100,100,35);

	  dustbin1 = new Dustbin(1000,620,20,300);
	  dustbin3 = new Dustbin(770,620,20,300);
		
	  log = createSprite(890,620,250,20);

   
	ground = new Ground(600,height,1200,20)

	  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  
  ball.display();


  dustbin1.display();

  dustbin3.display();

  ground.display();

  log.addImage(logimg);

  drawSprites();


}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  
		Matter.Body.applyForce (ball.body,ball.body.position,{x:270,y:-270});



	}
	}
   
   
  

 




