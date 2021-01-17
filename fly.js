class Fly{

    constructor(bodya,pointb){
    
    var option={
    bodyA:bodya,
    pointB:pointb,
    stiffness:0.0005,
    length:800
    
    
    
    }
       
    this.pointb=pointb
    this.sling=Constraint.create(option)
    World.add(world,this.sling)
   
    
    
    
    }
    
    display(){
   strokeWeight(0)
 
   line(this.pointb.x,this.pointb.y,this.sling.bodyA.position.x,this.sling.bodyA.position.y)
    
    
   }
    
    
    
   
    
       
  
     
    
    
    
    
    
    
    
    
    
    
    
    
    }
    
    
    
    