class BlockStack  {
  constructor(x,y,width,height) {
    this.block1 = Matter.Bodies.rectangle(150, 246, 50, 50, {isStatic: false});
    this.block2 = Matter.Bodies.rectangle(200, 246, 50, 50, {isStatic: false});
    this.block3 = Matter.Bodies.rectangle(250, 246, 50, 50, {isStatic: false});
    this.block4 = Matter.Bodies.rectangle(300, 246, 50, 50, {isStatic: false});
    this.block5 = Matter.Bodies.rectangle(350, 246, 50, 50, {isStatic: false});
    this.block6 = Matter.Bodies.rectangle(400, 246, 50, 50, {isStatic: false});
    this.block7 = Matter.Bodies.rectangle(175, 196, 50, 50, {isStatic: false});
    this.block8 = Matter.Bodies.rectangle(225, 196, 50, 50, {isStatic: false});
    this.block9 = Matter.Bodies.rectangle(275, 196, 50, 50, {isStatic: false});
    this.block10 = Matter.Bodies.rectangle(325, 196, 50, 50, {isStatic: false});
    this.block11 = Matter.Bodies.rectangle(375, 196, 50, 50, {isStatic: false});
    this.block12 = Matter.Bodies.rectangle(200, 146, 50, 50, {isStatic: false});
    this.block13 = Matter.Bodies.rectangle(250, 146, 50, 50, {isStatic: false});
    this.block14 = Matter.Bodies.rectangle(300, 146, 50, 50, {isStatic: false});
    this.block15 = Matter.Bodies.rectangle(350, 146, 50, 50, {isStatic: false});
    this.block16 = Matter.Bodies.rectangle(225, 96, 50, 50, {isStatic: false});
    this.block17 = Matter.Bodies.rectangle(275, 96, 50, 50, {isStatic: false});
    this.block18 = Matter.Bodies.rectangle(325, 96, 50, 50, {isStatic: false});
  }
  display(){
    
    rectMode(CENTER);
    fill(255);
    rect(block1.position.x, block1.position.y, 50 ,50)
    rect(block2.position.x, block2.position.y, 50 ,50)
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
  }

};
