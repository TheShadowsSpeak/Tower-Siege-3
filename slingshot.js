class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:1,
            stiffness:0.04
        }
        this.sling=Matter.Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
       this.sling.bodyA=null;
    }
    attach(polygon){
        this.sling.bodyA(polygon)
    }
    display(){
        if(this.sling.bodyA){
        var posA=this.sling.bodyA.position;
        var posB=this.sling.pointB;
        stroke("black")
        strokeWeight(5)
        //translate(posA.x,posA.y)
        line(posA.x,posA.y,posB.x,posB.y);
        console.log(posA.x,posA.y)}
        

    }
}