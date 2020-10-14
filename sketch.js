const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;
var stand;
var polygon,launcher
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(780,200,400,10)
  polygon = new Polygon(40,200,10,10)

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display();
  polygon.display();
}