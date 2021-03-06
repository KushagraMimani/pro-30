class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.Visibility = 255;
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      
      if (this.body.speed < 6) {
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();

      } else {
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(0,this.Visibility);
        rect(pos.x, pos.y, 30, 40);
        pop();
        }
      
    }
    
  };