class Polygon {
    constructor(x, y, width, height,angle){
        var options = {
            'restitution':0.6,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.Hexagon(x, y, width, height, options,6);
        this.width = width;
        this.height = height;
        this.image = loadImage("Hexagon.png")
        World.add(world, this.body);
      }
      display(){  
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
      }
  };
  