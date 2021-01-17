class Monster{
    
    constructor(x, y, width, height) {
     
      var options = {
        isStatic:false, 
        friction:1.0,
        density:0.04, 
      restitution:0.8 
      }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      this.image=loadImage("monster.png")
      this.image2=loadImage("monster2.png") 
      World.add(world, this.body);
      }
      display(){
        
      
      
       
       if(this.body.position.x>800){
    
        push()
        translate(this.body.position.x,this.body.position.y)
     
        rotate(this.body.angle)
   
        imageMode(CENTER);
        image(this.image2, 0,0, this.width, this.height);
        pop() 
        



        
      }
        else{

          push()
        
          translate(this.body.position.x,this.body.position.y)
     
          rotate(this.body.angle)
  
          imageMode(CENTER);
          image(this.image, 0,0, this.width, this.height);
          pop() 


        }

if(this.body.speed>5 && this.body.speed<8){

score++



}


      
          
          
    

        }
      
      
      }