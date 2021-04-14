const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15;
var hero,monster,rope,ground, bgT;

function preload() {
  timeAndBackground();
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  //First column of boxes
  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(600, 100, 70, 70);
  box3 = new Box(600, 100, 70, 70);
  box4 = new Box(600, 100, 70, 70);
  b5 = new Box(600, 100, 70, 70);
  b6 = new Box(600, 100, 70, 70);
  b7 = new Box(600, 100, 70, 70);

  //Second column of boxes
  b8 = new Box(700, 100, 70, 70);
  b9 = new Box(700, 100, 70, 70);
  b10 = new Box(700, 100, 70, 70);
  b11 = new Box(700, 100, 70, 70);
  b12 = new Box(700, 100, 70, 70);

  //Third column of boxes
  b13 = new Box(800, 100, 70, 70);
  b14 = new Box(800, 100, 70, 70);
  b15 = new Box(800, 100, 70, 70);
  b16 = new Box(800, 100, 70, 70);
  b17 = new Box(800, 100, 70, 70);
  b18 = new Box(800, 100, 70, 70);
  b19 = new Box(800, 100, 70, 70);
  b20 = new Box(800, 100, 70, 70);
}

function draw() {
  if(bgT)
    background(bgT);

  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  b5.display();
  b6.display();
  b7.display();

  b8.display();
  b9.display();
  b10.display(); 
  b11.display();
  b12.display();

  b13.display();
  b14.display();
  b15.display(); 
  b16.display();
  b17.display();
  b18.display();
  b19.display(); 
  b20.display();

  hero.display();
  rope.display();
  monster.display();

  timeAndBackground();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x : mouseX, y : mouseY})
}

async function timeAndBackground() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson = await response.json();
  var dateTime = responseJson.datetime;
  var hour = dateTime.slice(11, 13);

  if(hour < 06 && hour > 18) {
    bg = "images/GamingBackground.png";
  }
  else {
    bg = "images/gamingbackground1.jpg"
  }
  bgT = loadImage(bg);
}