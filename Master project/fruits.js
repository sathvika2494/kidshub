class Fruits
{
  constructor(s,f)
  {
    this.r = random(200,600);
    this.x = width;
    this.y = height - this.r;
    this.s = s;
    this.f = f;
  }

  move()
  {
    this.x -= this.s;
  }

  show()
  {
    image(this.f,this.x,this.y,50,50)
  }
}