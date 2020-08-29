class tree {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.0,
        isStatic:true,
        'friction':3.3,
        'density':1.2
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("tree.png");
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle= this.body.angle

    push();
    
    translate(pos.x,pos.y)
    rotate(angle)
    //rectMode(CENTER);
    fill(0,0,200);
    imageMode(CENTER);
    image(this.image, +0, -0, 600,400);
   
    //rect(0, 0, this.width, this.height);
    pop();
  }
};
