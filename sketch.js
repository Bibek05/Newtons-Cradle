
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;

var roof;
var invisibleGround;

var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,100,500,40)
	
	invisibleGround = new InvisibleGround(400,690,800,10);
	
	bob1 = new Bob(250,200,25,25);
	bob2 = new Bob(275,200,25,25);
	bob3 = new Bob(300,200,25,25);
	bob4 = new Bob(325,200,25,25);
	bob5 = new Bob(350,300,25,25);

    rope1 = new Rope(bob1.body, roof.body);
    rope2 = new Rope(bob2.body, roof.body);
    rope3 = new Rope(bob3.body, roof.body);
    rope4 = new Rope(bob4.body, roof.body);
    rope5 = new Rope(bob5.body, roof.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  roof.display();

  invisibleGround.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 

  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.body.applyForce(bob1.body, bob1.body.position, {x: -150, y: -100});
  }
}

