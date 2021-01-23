class Log {
    constructor(x, y, height, angle) {
     
      this.body = Bodies.rectangle(x, y, 30, height, angle,  {'restitution':0.8,'friction':1, 'density':1.0});
      this.width = 30;
      this.height = height;
      Matter .Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }
    show(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight (5)
      stroke ("green");
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };