class Garbage
{
  constructor(s,g)
  {
    this.r = random(200,600);
    this.x = width;
    this.y = height - this.r;
    this.s = s;
    this.g = g;
  }

  move()
  {
    this.x -= this.s;
  }

  show()
  {
    image(this.g,this.x,this.y,50,50)
  }
}