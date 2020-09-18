
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 700);

	   engine = Engine.create();
	   world = engine.world;
       trash=new Dustbin(1200,650);
	   ball= new ball(200,450,70);
	

	
		groundSprite=createSprite(width/2, height-35, width,10); 
	 
	 	groundSprite.shapeColor=color(255) 
	 	engine = Engine.create();
	 
	 	ground = Bodies.rectangle(width/2, 600, width, 10 ,{isStatic:true});
	  	World.add(world, ground); 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,1,100);
  drawSprites();
  ball.display();
  trash.display();
}
function keyPressed(){
	if (keycode==UP_ARROW){
	
	
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	
	}
	}


