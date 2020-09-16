var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground; 
var targetSprite1, targetSprite2, targetSprite3, targetBody1, targetBody2, targetBody3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
    //Create package sprites
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	targetSprite1=createSprite(width/2, height-45, 200, 20);
	targetSprite1.shapeColor = "red";

	targetSprite2=createSprite(300, height-85, 20, 100);
	targetSprite2.shapeColor = "red";

	targetSprite3=createSprite(500, height-85, 20, 100);
	targetSprite3.shapeColor = "red";
	            
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	//Create package body
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.45, isStatic:true});
	World.add(world, packageBody);
	
	targetBody1 = Bodies.rectangle(width/2 , height-45, 200, 20, {isStatic:true});
	World.add(world, targetBody1);

	targetBody2 = Bodies.rectangle(300 , height-85, 20, 100, {isStatic:true});
	World.add(world, targetBody2);

	targetBody3 = Bodies.rectangle(500, height-85, 20, 100, {isStatic:true});
	World.add(world, targetBody3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER)
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  targetSprite1.x= targetBody1.position.x 
  targetSprite1.y= targetBody1.position.y

keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
  }
}


