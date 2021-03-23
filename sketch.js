//Project 28
//Mango Toss

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj, groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var slingshot;
var world, boy;

function preload() {
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	//create mangoes
	mango1 = new mango(1100, 100, 30);
	mango2 = new mango(1200, 120, 30);
	mango3 = new mango(900, 150, 30);
	mango4 = new mango(1000, 70, 30);
	mango5 = new mango(1050, 180, 40);
	mango6 = new mango(970, 220, 30);
	mango7 = new mango(1200, 200, 30);
	mango8 = new mango(1000, 300, 30);

	//create stone 
	stoneObj = new stone(200, 340, 40);
	stoneObj.velocityX = 10
	stoneObj.velocityY = 10

	slingshot = new SlingShot(stoneObj.body, {x: 240, y:430});
	// mouseDragged();
	// mouseReleased();

	//create tree
	treeObj = new tree(1050, 580);

	groundObject = new ground(width / 2, 600, width, 20);

	Engine.run(engine);

}

function draw() {

	background(230);
	text("Press Space to play again.", 50, 50)
	image(boy, 200, 340, 200, 300);


	treeObj.display();

	//mangoes
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();

	//stone
	stoneObj.display();

	slingshot.display();

	groundObject.display();

	detectCollision(stoneObj, mango1);
	detectCollision(stoneObj, mango2);
	detectCollision(stoneObj, mango3);
	detectCollision(stoneObj, mango4);
	detectCollision(stoneObj, mango5);
	detectCollision(stoneObj, mango6);
	detectCollision(stoneObj, mango7);
	detectCollision(stoneObj, mango8);

}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	slingshot.fly();

}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  slingshot.attach(stoneObj.body);
	}
  }

  function detectCollision(stoneL, mangoL) {
	mangoBodyPos = mangoL.body.position
	stoneBodyPos = stoneL.body.position
	var distance = dist(stoneBodyPos.x, stoneBodyPos.y, mangoBodyPos.x, mangoBodyPos.y)
	if (distance <= stoneL.r+mangoL.r) {
		Matter.Body.setStatic(mangoL.body, false)
	}
  }