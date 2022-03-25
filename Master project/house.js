class House
{
  constructor()
  {
    this.r = 350
    this.x = 50;
    this.y = height - this.r;
  }

  show()
  {
    fill(200)
    rect(this.x,this.y,200,300);
    //image(pic,this.x,this.y,this.r,this.r)
  }
}