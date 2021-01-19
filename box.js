class Box{
    constructor(x,y,width,height){
        
        this.body=Bodies.rectangle(x,y,width,height)
        this.width=width;
        this.height=height;
        this.Visibility=255;
        World.add(world,this.body)
    }
    display(){
        
        if(this.body.speed < 3){
            rectMode(CENTER)
        var randomNumber=random(0,255)
        var randomblue=random(15,255)
        var randomgreen=random(15,255)
        fill(randomNumber, randomblue,randomgreen);
        var pos=this.body.position;
        rect(pos.x, pos.y, this.width, this.height)
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
             function score(){
              if(this.Visibility<0 && this.Visibility>-105){
              var score=score++;
              text("Score="+score,750,40);
              }
             }
             pop();
           }
          } 
          
        }
    
