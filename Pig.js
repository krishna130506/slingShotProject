class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,10,20);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    var randomColor = color(random(255),random(255),random(255));
    fill(randomColor);
    rect(pos.x, pos.y,10,20);
  }
};