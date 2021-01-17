class Hero{



  
  
    
        constructor(x, y,radius) {
           
            var options = {
               isStatic:false,
               restitiution:0.3
            }
    
    this.body=Bodies.circle(x,y,radius,options)
    this.radius=radius
    this.image=loadImage("hero.png")
    World.add(world,this.body)
    
    
    
    
    
        } 
    
    display(){
      
        push()
    
        
       
        imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y, this.radius,this.radius);
    
       pop()
       
    }
    
    
    
    
    
    
    
    
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
























