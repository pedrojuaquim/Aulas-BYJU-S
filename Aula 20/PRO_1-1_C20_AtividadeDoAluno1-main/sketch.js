const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball2, ground2;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  ball2 = Bodies.circle(300,10,20,ball_options);
  World.add(world,ball2);
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground2 = Bodies.rectangle(300,200,100,20,ground_options);
  World.add(world,ground2);
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background (51);
  Engine.update(engine);
  fill(0,0,255);
  push();
  fill(255,0,0);
  ellipse(ball2.position.x,ball2.position.y,20);
  pop();
  push();
  fill(0,255,0);
  ellipse(ball.position.x,ball.position.y,20);
  pop();
  rect(ground2.position.x,ground2.position.y,200,20);
  rect(ground.position.x,ground.position.y,400,20);
}

