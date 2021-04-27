
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Bob1 = new Bob(280,400,60)
	Bob2 = new Bob(400,400,60)
	Bob3 = new Bob(520,400,60)
	Bob4 = new Bob(640,400,60)
	Bob5 = new Bob(760,400,60)
	RopeA = new Rope(Bob1.body,Roof.body)
	Roof = new Roof(520,700,width,60)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
RopeA.display();
 /* RopeB.display();
  RopeC.display();
  RopeD.display();
  RopeE.display();
*/
Roof.display();
  drawSprites();
 text(mouseX + ',' + mouseY, mouseX + 10, mouseY - 10)
}
