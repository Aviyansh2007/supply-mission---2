const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var helicopter,heliImage,package,packImage;

var groundSprite;

var engine, world, packageBody, ground;

var rectangle1,rectangle2,rectangle3;




function preload()
{
	heliImage = loadImage("helicopter.png");
	packImage = loadImage("package.png");
}

function setup() {
	rectMode(CENTER);
	createCanvas(600, 700);

	engine = Engine.create();
	world = engine.world;


	
	package = createSprite(width/2,150,10,10);
	package.addImage(packImage);
	package.scale = 0.2;

	helicopter = createSprite(width/2,150,10,10);
	helicopter.addImage(heliImage);

	helicopter.scale = 0.6;

	groundSprite = createSprite(width/2,650,width,10);
	groundSprite.shapeColor = "white";

	var groundoptions = {
		isStatic:true
	}

	ground = Bodies.rectangle(width/2,650,width,15,groundoptions);
	World.add(world,ground);
	
	var packoptions = {
		isStatic:true,
		restitution:1
	}

	packageBody = Bodies.rectangle(width/2,150,50,50,packoptions);
	World.add(world,packageBody);
	Engine.run(engine);

	var rectangle1 = createSprite(200,594,20,100);
	rectangle1.shapeColor = "red";

	var rectangle2 = createSprite(300,634,200,20);
	rectangle2.shapeColor = "red";

	var rectangle3 = createSprite(400,594,20,100);
	rectangle3.shapeColor = "red";


	
  
}


function draw() {
  rectMode(CENTER);
  
  background(0);
 package.x = packageBody.position.x;
 package.y = packageBody.position.y



  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false)
    
  }
}



