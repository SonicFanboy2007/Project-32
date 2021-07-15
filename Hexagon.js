class Hexagon{
    constructor(x, y) {
        var options = {
            'isStatic' : false,
            'restitution':0.3,
            'friction':0.4,
            'density':2
        }
        this.body = Bodies.circle(x, y,50, options);
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(RADIUS);
        image(this.image,0,0,60,60);
        pop();
      }
}