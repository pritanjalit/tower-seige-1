class Ball{
    constructor(x, y, radius) {
        var options = {
              
        }
        this.polygon=loadImage("polygon.png");
        this.body = Bodies.circle(x,y,radius);
        this.width = width;
        this.height = height;
        this.radius=radius;
        World.add(world, this.body);

        
      }
      display(){
        image(this.ball,200,20);
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(0,0,ball.position.x,ball.position.y,40,40)
        pop();
      }
}
