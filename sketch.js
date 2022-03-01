let x  = 0; //global avariables
let y = 0;
let x2 = 0
let y2 = 0;
let x3 = 0;
let y3 = 0;
let dir1 = 1
let dir2 = 2
let dir3 = 1

function setup() //only executes once, executes first
{
  createCanvas(800, 600);
}

function draw()  //executes after setup, 30 times a second
{ 
  
  background("purple");

  stroke("black");
  strokeWeight(5)
  fill("cyan");
  rect(0,y,800,200);


  y = y+ dir1 * 2 ;

  if(y <= 0)
  {
    dir1 = 1
   
  }
  else if(y > 400)
  {
    dir1 = -1
   
  }

  stroke("orange");
  fill("green");
  strokeWeight(2)
  circle(x3+100,y3+100,200);

  x3 = x3 + dir3*3
  y3 = y3 + dir3*2

  if(y3 <= 0)
  {
   dir3 = 1
  }
  else if(y3 > 400)
  {
  dir3 = -1
  }

  
 /* stroke("red");
  fill("yellow")
  strokeWeight(10)
  triangle(0,0,800,0,400,200)

  stroke("red");
  fill("yellow")
  strokeWeight(7)
  triangle(0,600,400,400,800,600)*/


}
