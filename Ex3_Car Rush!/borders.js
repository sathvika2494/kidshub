
class Borders{
    
    constructor(){
    this.x = 0;
    this.y = 0;
    this.h = 700;
    this.w = 150;
    this.col = "#5A605B";

    }
    
    draw(){
        stroke(0);
        strokeWeight(3);
        fill(this.col);
        rect(this.x, this.y, this.w, this.h);
    }
  }