const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var engine,world;
var particles;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var ground;
var score = 0;
var turn = 0;
var count = 0;
var play = 1;
var end = 2;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75,10));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175,10));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275,10));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375,10));
    }    
}

function draw() {
  background("black");

  textSize(20);
  fill("white");
  text("Score : "+score,20,30);
  text("Turns : "+turn,700,30 )

  textSize(20);
  
  

  Engine.update(engine);

  ground.display();

  if(gameState === "play")
  {
   for (var j = 0; j < plinkos.length; j++) {
     
     plinkos[j].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particles != null)
   {
     particles.display();
     if(particles.body.position.y > 760)
     {
        if(particles.body.position.x < 300)
        {
          score = score + Math.round(random(100,500));
          particles = null;
        }
        else if(particles.body.position.x > 301 && particles.body.position.x < 600)
        {
          score = score +Math.round(random(100,500));
          particles = null;

        }
        else if(particles.body.position.x > 601 && particles.body.position.x < 790)
        {
          score = score + Math.round(random(100,500));
          particles = null;

        }
     }
     if(turn >= 5)
     {
       gameState = "end";
     }
    }

  }
  else if(gameState === "end")
  {
    textSize(25);
    text("Game Over and Press Space To Restart",250,400);
    if(keyCode === 32)
    {
      gameState = "play";
      turn = 0;
      score = 0
    }
  }
   

}
function mousePressed()
{
 
}
function mouseReleased(){
  if(gameState != "end")
  {
    count++
    particles = new Particle(mouseX,10,10,10);
    turn++;
  }
}