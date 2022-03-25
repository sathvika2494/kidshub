class Monster
{
  constructor()
  {
    this.r = 150
    this.x = this.r;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 3;
  }

  jump()
  {
    this.vy = -25;
  }

  hits(garbages) 
  {
    let x1 = this.x + 100;
    let y1 = this.y + 100;
    let x2 = garbages.x + 50;
    let y2 = garbages.y + 50;
    return collideCircleCircle(x1, y1, 100, x2, y2, 50);
  }

  move()
  {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);

    this.x = mouseX - 50;
    this.x = constrain(this.x, 50, 1250);
  }

  show()
  {
    fill(0)
    rect(this.x,this.y,100,100);
    //image(pic,this.x,this.y,this.r,this.r)
  }
}