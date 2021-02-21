var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var rectAngle1, rectAngle2, rectAngle3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	rectAngle1Sprite = createSprite(width / 2, height - 35, width / 4, 15);
	rectAngle1Sprite.shapeColor = color(255, 0, 0);

	rectAngle2Sprite = createSprite(500, height - 90, 15, height / 7);
	rectAngle2Sprite.shapeColor = color(255, 0, 0);

	rectAngle3Sprite = createSprite(300, height - 90, 15, height / 7);
	rectAngle3Sprite.shapeColor = color(255, 0, 0);

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0, isStatic: true });
	World.add(world, packageBody);

	rectAngle1 = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, rectAngle1);

	rectAngle2 = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, rectAngle2);

	rectAngle3 = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, rectAngle3);

	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);
	ground.depth = rectAngle1.depth;
	rectAngle1.depth = rectAngle1.depth + 1;


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;
	keyPressed()
	drawSprites();

}

function keyPressed() {
	if (keyCode === 40) {
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		Matter.Body.setStatic(packageBody, false);
	}
}


