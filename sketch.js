const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world,backgroundimg;
var particles,score=0;
function preload() {
    backgroundimg=loadImage("bg.png") 
}
function setup(){
    var canvas = createCanvas(1300,700);
    engine = Engine.create();
    world = engine.world;

hero= new Hero(150,200,200)
fly= new Fly(hero.body,{x:200,y:-900})
ground=new Ground(600,680,1200,5)
block=new Block(500,650,100,100)
block2=new Block(500,650,100,100)
block3=new Block(500,650,100,100)
block4=new Block(500,650,100,100)
block5=new Block(500,650,100,100)
block6=new Block(600,650,100,100)
block7=new Block(600,650,100,100)
block8=new Block(600,650,100,100)
block9=new Block(600,650,100,100)
block10=new Block(600,650,100,100)
monster=new Monster(800,400,100,100)
ground2=new Ground(800,420,70,3)




}

function draw(){
    background(backgroundimg);
    Engine.update(engine);
    textSize(35)
    fill("red")
  text("score= "+score,1000,50 )
  
  
    hero.display()
   ground.display()
block.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
monster.display()
ground2.display()
fly.display()


}

function mouseDragged(){
Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})

}