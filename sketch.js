/*For this summer season Juno is visiting his granny’s home. There he saw a mango tree in granny’s 
garden and wanted to eat them. Help him pluck some mangoes by throwing a stone.*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var tree1,ground,boy1,stone1,chain1,mango1,mango2,mango3,mango4,mango5;

function preload()
{

}

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
  world = engine.world;
 
  groundSprite=createSprite(width/2, 700, width,10);
	groundSprite.shapeColor=color("brown")

  ground = Bodies.rectangle(width/2, 649, width, 10 , {isStatic:true} );
	World.add(world, ground);

  //Engine.run(engine);
  
  tree1=new tree(900,500,10,20);
  boy1=new boy(200,650,20,20);
  stone1=new stone(155,630,30)

  chain1=new chain(stone1.body,{x:155,y:630})

  mango1= new mango(800,480,10)
  mango2= new mango(700,480,10)
  mango3= new mango(1080,450,10)
  mango4= new mango(900,450,10)
  mango5= new mango(840,400,10)
}

function draw() {
  rectMode(CENTER);
  background(0,0,200);
  Engine.update(engine);

  tree1.display();
  boy1.display();
  stone1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
  
}

function mouseReleased(){
  chain1.fly();
}

function keyPressed () {

  if(keyCode === 32){
      chain1.attach(stone1.body);
  }
}

function detectCollision(lstone,lmango){

var mangoBodyPosition;
var stoneBodyPosition;

mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

/*console.log("Hi Det Coll begin");
console.log("distance="+distance);
console.log("lmango.r="+lmango.radius);
console.log("lstone.r="+lstone.radius);
console.log("mango.r+lstone.r="+mango.r+lstone.r);*/

  if(distance<=lmango.radius+lstone.radius){
    Matter.Body.setStatic(lmango.body,false);
    //console.log("Hi Det Coll inside i");
  }
}



