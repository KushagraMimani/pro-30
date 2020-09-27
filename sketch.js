const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var ground;
var block, hxagn;
var launcher;

function setup() {
  var canvas = createCanvas(1000,700);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(780,300,220,10);

  //level 1
  block1 = new Block(690,275,30,40);
  block2 = new Block(720,275,30,40);
  block3 = new Block(750,275,30,40);
  block4 = new Block(780,275,30,40);
  block5 = new Block(810,275,30,40);
  block6 = new Block(840,275,30,40);
  block7 = new Block(870,275,30,40);

  //level 2
  block8 = new Block(720,235,30,40);
  block9 = new Block(750,235,30,40);
  block10 = new Block(780,235,30,40);
  block11 = new Block(810,235,30,40);
  block12 = new Block(840,235,30,40);

  //level 3
  block13 = new Block(750,195,30,40);
  block14 = new Block(780,195,30,40);
  block15 = new Block(810,195,30,40);

  //level 4 (last)
  block16 = new Block(780,155,30,40);

  /*** NEW PYRAMID ***/

  ground2 = new Ground(780,545,220,10);
  //level 1
  block17 = new Block(690,520,30,40);
  block18 = new Block(720,520,30,40);
  block19 = new Block(750,520,30,40);
  block20 = new Block(780,520,30,40);
  block21 = new Block(810,520,30,40);
  block22 = new Block(840,520,30,40);
  block23 = new Block(870,520,30,40);

  //level 2
  block24 = new Block(720,480,30,40);
  block25 = new Block(750,480,30,40);
  block26 = new Block(780,480,30,40);
  block27 = new Block(810,480,30,40);
  block28 = new Block(840,480,30,40);

  //level 3
  block29 = new Block(750,440,30,40);
  block30 = new Block(780,440,30,40);
  block31 = new Block(810,440,30,40);

  //level 4 (last)
  block32 = new Block(780,400,30,40);

  hxagn = new Polygon(200,197);

  launcher = new SlingShot(hxagn.body, {x: 200, y: 197});

  Engine.run(engine);
}

function draw() {
  background("grey"); 
  Engine.update(engine); 

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
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
  block26.display();
  block27.display();
  block28.display();

  block29.display();
  block30.display();
  block31.display();

  block32.display();

  hxagn.display();
  launcher.display();

  ground1.display();
  ground2.display();

  //drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hxagn.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}

function keyPressed() {
  if (keyCode === 32) {
      launcher.attach(hxagn.body);
  }
}