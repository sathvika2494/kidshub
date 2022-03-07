var at = 0;
let bg;

function setup() 
{
  createCanvas(1400, 700);
  bg = loadImage('Tap here! (1400 × 700 px).png');
}

function draw() 
{
  switch(at)
  {
    //Case 0 pulls up the first page.
    case 0:
      at = firstPage();

      break;
    
    //Case 1 pulls up the nevigator 
    case 1:
      background(0);

      break;
      
    //Case 2 = exercise 1
    case 2:
      
    

      break;

    //Case 3 = exercise 2
    case 3:
      
    

      break;
    //Case 4 = exercise 3
    case 4:
      
    

      break;
    //Case 5 = exercise 4
    case 5:
      
    

      break;
    // default:
    //   at = 0;
  }
}

function firstPage()
{
  background(bg);
  mouseClicked();
}

function mouseClicked()
{
  at = 1;
}
