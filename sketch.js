
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	boyImage = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(650, 460)
	ground = new Ground(400, 690)
	rock = new Rock(150, 570, 50)
	
	boy = createSprite(200, 620, 100, 100)
	boy.addImage(boyImage)
	boy.scale = 0.1

	chain = new Chain(rock.body, {x: 150, y:570})
	mango1 = new Mango(570, 420, 50)
	mango2 = new Mango(630, 390, 40)
	mango3 = new Mango(650, 310, 50)
	mango4 = new Mango(720, 370, 35)
	mango5 = new Mango(770, 410, 30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  ground.display();

  //chain.display();

  detectcollision(rock, mango1)
  detectcollision(rock, mango2)
  detectcollision(rock, mango3)
  detectcollision(rock, mango4)
  detectcollision(rock, mango5)

  drawSprites();
  rock.display();
 
}

function mouseDragged(){
	Body.setPosition(rock.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
	chain.fly();
}

function detectcollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position 

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance <= lstone.radius + lmango.radius){
		Body.setStatic(lmango.body, false)
	}
}


function keyPressed(){
	if (keyCode === 32){
		Body.setPosition(rock.body, {x: 150, y:570})
		chain.attach(rock.body);
	}
}