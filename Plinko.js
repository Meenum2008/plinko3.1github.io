class Plinko{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:15,
            density:1.2

        }
        this.x=x;
        this.y=y;
        this.r=20;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        this.color=color(random(0,255),random(0,255),random(0,255));

        World.add(world,this.body);
    
    }
    display(){

        var pos = this.body.position;

        push();
        
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        stroke(this.color)
         fill(this.color);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}