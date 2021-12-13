const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var btn1;
var btn2;
var lbin;
var rbin;
var radius = 40;

function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
  //btn1=createImg('right.png');
  //btn1.position(220,30);
  //btn1.size(50,50);
  //btn1.mouseClicked(hForce);
  //btn2=createImg('up.png');
  //btn2.position(20,30);
  //btn2.size(50,50);
  //btn2.mouseClicked(vForce);
  ground =new Ground(width/2,670,width,20);
  //right = new Ground(390,200,20,400);
  //left = new Ground(10,200,20,400);
  //top_wall = new Ground(200,10,400,20);
  var ball_options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
  }
  ball = Bodies.circle(260,100,radius/2,ball_options);
  World.add(world,ball);
  lbin =new Ground(1100,600,20,120);
  rbin =new Ground(1350,600,20,120);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background('blue');
  ellipse(ball.position.x,ball.position.y,20)
  ground.show();
  //top_wall.show();
  //left.show();
  //right.show();
  lbin.show();
  rbin.show();

  Engine.update(engine);
}
function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
  }
}
