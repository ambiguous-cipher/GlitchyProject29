const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //Body creator *DUN DUN DUNNN*
  
    //The Stands
      ground1 = new Ground(600, 350, 300, 10);
      ground2 = new Ground(300, 300, 300, 10);

    //The Blocks
      //level1
        //block1 = Matter.Bodies.rectangle(150, 246, 50, 50, {isStatic: false});
        //block2 = Matter.Bodies.rectangle(200, 246, 50, 50, {isStatic: false});
        block3 = Bodies.rectangle(250, 246, 50, 50, {isStatic: false, restituition: 0.3, friction: 0});
        block4 = Bodies.rectangle(300, 246, 50, 50, {isStatic: false, restituition: 0.3, friction: 0});
        block5 = Bodies.rectangle(350, 246, 50, 50, {isStatic: false, restituition: 0.3, friction: 0});
        block6 = Bodies.rectangle(400, 246, 50, 50, {isStatic: false, restituition: 0.3, friction: 0});

        block7 = Bodies.rectangle(175, 196, 50, 50, {isStatic: false, restituition: 0.3, friction: 0});
        block8 = Bodies.rectangle(225, 196, 50, 50, {isStatic: false, restituition: 0.3, friction: 0});
        block9 = Bodies.rectangle(275, 196, 50, 50, {isStatic: false, restituition: 0.3, friction: 0});
        block10 = Bodies.rectangle(325, 196, 50, 50, {isStatic: false, restituition: 0.3, friction: 0});
        block11 = Bodies.rectangle(375, 196, 50, 50, {isStatic: false, restituition: 0.3, friction: 0});
        
        block12 = Bodies.rectangle(200, 146, 50, 50, {isStatic: false, restituition: 0.3, friction: 0});
        block13 = Bodies.rectangle(250, 146, 50, 50, {isStatic: false, restituition: 0.3, friction: 0});
        block14 = Bodies.rectangle(300, 146, 50, 50, {isStatic: false, restituition: 0.3, friction: 0});
        block15 = Bodies.rectangle(350, 146, 50, 50, {isStatic: false, restituition: 0.3, friction: 0});

        block16 = Bodies.rectangle(225, 96, 50, 50, {isStatic: false, restituition: 0.3, friction: 0});
        block17 = Bodies.rectangle(275, 96, 50, 50, {isStatic: false, restituition: 0.3, friction: 0});
        block18 = Bodies.rectangle(325, 96, 50, 50, {isStatic: false, restituition: 0.3, friction: 0});
        

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  drawSprites();
  Engine.update(engine)
  
  //rect(block1.position.x, block1.position.y, 50 ,50)
    //rect(block2.position.x, block2.position.y, 50 ,50)
    rect(block3.position.x, block3.position.y, 50 ,50)
    rect(block4.position.x, block4.position.y, 50 ,50)
    rect(block5.position.x, block5.position.y, 50 ,50)
    rect(block6.position.x, block6.position.y, 50 ,50)

    rect(block7.position.x, block7.position.y, 50 ,50)
    rect(block8.position.x, block8.position.y, 50 ,50)
    rect(block9.position.x, block9.position.y, 50 ,50)
    rect(block10.position.x, block10.position.y, 50 ,50)
    rect(block11.position.x, block11.position.y, 50 ,50)

    rect(block12.position.x, block12.position.y, 50 ,50)
    rect(block13.position.x, block13.position.y, 50 ,50)
    rect(block14.position.x, block14.position.y, 50 ,50)
    rect(block15.position.x, block15.position.y, 50 ,50)

    rect(block16.position.x, block16.position.y, 50 ,50)
    rect(block17.position.x, block17.position.y, 50 ,50)
    rect(block18.position.x, block18.position.y, 50 ,50)
  
  
  //Body Display
  ground1.display();
  ground2.display();
  //block1.display();
};