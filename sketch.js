
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,ground2,ground3;
var striker;
var shooting;
var block1,block2,block3,block4,block5
var block6,block7,block8,block9;
var block10,block11,block12;
var block13,block14;
var block15
var score;

var block16,block17,block18,block19;
var block20,block21,block22;
var block23,block24;
var block25;
var back;

function preload()
{

}

function setup() {
	createCanvas(1350, 650);
   

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(675,610,1350,20);
	ground2 = new Ground(600,450,370,10);
	ground3 = new Ground(1100,250,300,10);
	striker = new Hexagon(150,250);
	shooting = new Shooter(striker.body,{x:150,y:250});
	block1 = new Block1(480,400,60,60);
	block2 = new Block1(540,400,60,60);
	block3 = new Block1(600,400,60,60);
	block4 = new Block1(660,400,60,60);
	block5 = new Block1(720,400,60,60);
	block6 = new Block2(510,340,60,60);
	block7= new Block2(570,340,60,60);
	block8 = new Block2(630,340,60,60);
	block9 = new Block2(690,340,60,60);
	block10 = new Block3(540,280,60,60);
	block11 = new Block3(600,280,60,60);
	block12 = new Block3(660,280,60,60);
	block13 = new Block4(570,200,60,60);
	block14 = new Block4(630,220,60,60);
	block15 = new Block5(600,160,60,60);

	block16 = new Block1(1000,200,60,60);
	block17 = new Block1(1060,200,60,60);
	block18 = new Block1(1120,200,60,60);
	block19 = new Block1(1180,200,60,60);
	block20 = new Block2(1030,140,60,60);
	block21 = new Block2(1090,140,60,60);
	block22 = new Block2(1150,140,60,60);
	block23 = new Block3(1060,80,60,60);
	block24 = new Block3(1120,80,60,60);
	block25 = new Block4(1090,20,60,60);
	 
	score = 0;

	Engine.run(engine);

}





function draw() {
  background ()
  rectMode(CENTER);
  getBackColor();


 ground1.display();
 ground2.display();
 ground3.display();
 striker.display();
shooting.display();
block1.display();
block2.display()
block3.display()
block4.display()
block5.display()
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();

block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();
block19.score();
block20.score();
block21.score();
block22.score();
block23.score();
block24.score();
block25.score();


fill('white')
textSize(25);
text("Drag to Shoot",300,50);
textSize(20);
text("Press 'Space' to Get a Second Chance",900,550);
text("Score : "+ score ,1000,50);

  drawSprites();


}

function mouseDragged(){
	Matter.Body.setPosition(striker.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	shooting.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(striker.body,{x:150,y:250})
		shooting.attach(striker.body);
	}
}

async function getBackColor(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hours = dateTime.slice(11,13);
    console.log(hours);
    if(hours >= 18 && hours <= 06){
        background('black');
    }
    else{
		background('white');
	}  

}






